import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import heartAnimation from "../../../assets/lottie/applause.json";
import audioNotification from "../../../assets/audio/notification.mp3";
// Toast component
const Toast = ({ message, type }) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 40, opacity: 0 }}
    style={{
      position: "fixed",
      bottom: 32,
      left: "50%",
      transform: "translateX(-50%)",
      background: type === "success" ? "#43b581" : "#5865f2",
      color: "#fff",
      padding: "14px 32px",
      borderRadius: 8,
      fontWeight: 600,
      fontSize: 16,
      zIndex: 9999,
      boxShadow: "0 4px 24px #0006",
    }}
  >
    {message}
  </motion.div>
);

// Emoji pour les réactions
const reactionTypes = [
  { type: "heart", emoji: "❤️", animation: heartAnimation },
  { type: "fire", emoji: "🔥" },
  { type: "laugh", emoji: "😂" },
  { type: "star", emoji: "⭐" },
];

// Génère des posts mock dynamiquement
const generatePosts = (count = 20) =>
  Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    author: `User${(i % 7) + 1}`,
    avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=User${(i % 7) + 1}`,
    title: `Post #${i + 1}`,
    content: `Ceci est le contenu du post numéro ${i + 1}.`,
    media:
      i % 3 === 0
        ? "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
        : null,
    reactions: {
      heart: Math.floor(Math.random() * 5),
      fire: Math.floor(Math.random() * 3),
      laugh: Math.floor(Math.random() * 2),
      star: Math.floor(Math.random() * 4),
    },
    timestamp: Date.now() - Math.floor(Math.random() * 100000000),
  }));

const ReactionButton = ({ type, emoji, count, onReact, animation }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsAnimating(true);
    onReact(type);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <motion.button
      whileTap={{ scale: 1.3 }}
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        margin: "0 4px",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontSize: 18,
        position: "relative",
      }}
    >
      <span style={{ position: "relative", width: 28, height: 28 }}>
        {animation ? (
          <Lottie
            animationData={animation}
            loop={false}
            play={isAnimating}
            style={{
              width: 28,
              height: 28,
              position: "absolute",
              left: 0,
              top: 0,
            }}
          />
        ) : (
          <span>{emoji}</span>
        )}
      </span>
      <span style={{ marginLeft: 4, fontSize: 14 }}>{count}</span>
    </motion.button>
  );
};

const BlogCard = ({ post, onReact, onClick }) => (
  <motion.div
    className="discord-message"
    whileHover={{ background: "#2a2d32" }}
    style={{
      display: "flex",
      alignItems: "flex-start",
      padding: "16px 20px",
      borderBottom: "1px solid #23272a",
      background: "#313338",
      cursor: "pointer",
      gap: 16,
    }}
    onClick={() => onClick(post)}
  >
    <img
      src={post.avatar}
      alt={post.author}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        marginTop: 2,
        border: "2px solid #23272a",
      }}
    />
    <div style={{ flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "#fff", fontWeight: 600 }}>{post.author}</span>
        <span style={{ color: "#b5bac1", fontSize: 12 }}>
          {new Date(post.timestamp).toLocaleString()}
        </span>
      </div>
      <div style={{ color: "#dbdee1", margin: "4px 0 6px 0" }}>
        {post.content}
      </div>
      {post.media && (
        <img
          src={post.media}
          alt=""
          style={{
            maxWidth: 240,
            borderRadius: 8,
            margin: "6px 0",
            border: "1px solid #23272a",
          }}
        />
      )}
      <div style={{ display: "flex", marginTop: 6 }}>
        {reactionTypes.map((r) => (
          <ReactionButton
            key={r.type}
            type={r.type}
            emoji={r.emoji}
            count={post.reactions[r.type]}
            onReact={() => onReact(post.id, r.type)}
            animation={r.animation}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

// Modal pour afficher le post en détail
const PostModal = ({ post, onClose, onReact }) => {
  if (!post) return null;
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 100,
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        style={{
          background: "#23272a",
          borderRadius: 12,
          padding: 32,
          minWidth: 340,
          maxWidth: 420,
          boxShadow: "0 8px 32px #0008",
          color: "#fff",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: 16,
            top: 16,
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 22,
            cursor: "pointer",
          }}
        >
          ×
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src={post.avatar}
            alt={post.author}
            style={{ width: 48, height: 48, borderRadius: "50%" }}
          />
          <div>
            <div style={{ fontWeight: 700 }}>{post.author}</div>
            <div style={{ color: "#b5bac1", fontSize: 13 }}>
              {new Date(post.timestamp).toLocaleString()}
            </div>
          </div>
        </div>
        <div style={{ margin: "18px 0 10px 0", fontSize: 17 }}>
          {post.content}
        </div>
        {post.media && (
          <img
            src={post.media}
            alt=""
            style={{
              maxWidth: "100%",
              borderRadius: 8,
              margin: "8px 0",
              border: "1px solid #313338",
            }}
          />
        )}
        <div style={{ display: "flex", marginTop: 10 }}>
          {reactionTypes.map((r) => (
            <ReactionButton
              key={r.type}
              type={r.type}
              emoji={r.emoji}
              count={post.reactions[r.type]}
              onReact={() => onReact(post.id, r.type)}
              animation={r.animation}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const LOCAL_STORAGE_KEY = "supernova_blog_posts";

const BlogContainer = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [newMedia, setNewMedia] = useState("");
  const [toast, setToast] = useState(null);
  const sendAudio = useRef(null);
  const successAudio = useRef(null);

  // Load posts from localStorage or generate
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setPosts(JSON.parse(saved));
    } else {
      const generated = generatePosts(10);
      setPosts(generated);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(generated));
    }
  }, []);

  // Save posts to localStorage on change
  useEffect(() => {
    if (posts.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
    }
  }, [posts]);

  // Toast auto-hide
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 1800);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const handleReact = (postId, type) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              reactions: {
                ...post.reactions,
                [type]: post.reactions[type] + 1,
              },
            }
          : post
      )
    );
    // Si modal ouvert, mettre à jour aussi le post sélectionné
    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost((prev) => ({
        ...prev,
        reactions: {
          ...prev.reactions,
          [type]: prev.reactions[type] + 1,
        },
      }));
    }
  };

  // Permet d'envoyer un post avec image/gif
  const handleAddPost = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() && !newMedia.trim()) return;
    setToast({ message: "Envoi en cours...", type: "loading" });
    sendAudio.current && sendAudio.current.play();

    // Simule un délai d'envoi
    setTimeout(() => {
      const newPost = {
        id: posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
        author: "You",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=You",
        title: "",
        content: newMessage,
        media: newMedia.trim() ? newMedia.trim() : null,
        reactions: { heart: 0, fire: 0, laugh: 0, star: 0 },
        timestamp: Date.now(),
      };
      setPosts([newPost, ...posts]);
      setNewMessage("");
      setNewMedia("");
      setToast({ message: "Message envoyé !", type: "success" });
      successAudio.current && successAudio.current.play();
    }, 1200);
  };

  return (
    <div className="flex h-[100vh] overflow-y-auto w-full">
      {/* Audio pour feedback */}
      <audio ref={sendAudio} src={audioNotification} preload="auto" />
      <audio ref={successAudio} src={audioNotification} preload="auto" />
      {/* Sidebar Discord */}
      <aside
        style={{
          width: 260,
          background: "#1e1f22",
          borderRight: "1px solid #23272a",
          padding: "32px 0 0 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ color: "#fff", fontSize: 22, margin: 0 }}>
            The ENDPAGE
          </h2>
        </div>
        <div style={{ color: "#b5bac1", fontSize: 15, marginBottom: 24 }}>
          <Lottie
            animationData={heartAnimation}
            loop={true}
            style={{ width: 80 }}
          />
          <div style={{ marginTop: 8 }}>Ambiance du jour</div>
        </div>
        <div style={{ color: "#5865f2", fontWeight: 600, marginTop: 24 }}>
          # général
        </div>
        <div style={{ color: "#b5bac1", marginTop: 12, fontSize: 13 }}>
          {posts.length} messages
        </div>
      </aside>
      {/* Main content */}
      <main
        style={{
          flex: 1,
          padding: "0 0 0 0",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            background: "#313338",
            borderBottom: "1px solid #23272a",
            padding: "18px 32px",
            fontSize: 20,
            color: "#fff",
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          # général
        </div>
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            background: "#2b2d31",
            padding: "0 0 32px 0",
          }}
        >
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onReact={handleReact}
              onClick={setSelectedPost}
            />
          ))}
        </div>
        {/* Input bar style Discord */}
        <form
          onSubmit={handleAddPost}
          style={{
            background: "#383a40",
            borderTop: "1px solid #23272a",
            padding: "16px 32px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <img
            src="https://api.dicebear.com/7.x/bottts/svg?seed=You"
            alt="You"
            style={{ width: 36, height: 36, borderRadius: "50%" }}
          />
          <input
            type="text"
            placeholder="Envoyer un message à #général"
            style={{
              flex: 1,
              background: "#23272a",
              border: "none",
              borderRadius: 8,
              color: "#fff",
              padding: "10px 16px",
              fontSize: 16,
              outline: "none",
            }}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <input
            type="url"
            placeholder="URL image/gif (optionnel)"
            style={{
              width: 180,
              background: "#23272a",
              border: "none",
              borderRadius: 8,
              color: "#fff",
              padding: "10px 12px",
              fontSize: 15,
              outline: "none",
            }}
            value={newMedia}
            onChange={(e) => setNewMedia(e.target.value)}
          />
          <button
            style={{
              background: "#5865f2",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 18px",
              fontWeight: 600,
              fontSize: 15,
              cursor:
                newMessage.trim() || newMedia.trim()
                  ? "pointer"
                  : "not-allowed",
              opacity: newMessage.trim() || newMedia.trim() ? 1 : 0.7,
            }}
            disabled={
              !(newMessage.trim() || newMedia.trim()) ||
              toast?.type === "loading"
            }
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </main>
      <AnimatePresence>
        {selectedPost && (
          <PostModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
            onReact={handleReact}
          />
        )}
        {toast && <Toast message={toast.message} type={toast.type} />}
      </AnimatePresence>
    </div>
  );
};

export default BlogContainer;
