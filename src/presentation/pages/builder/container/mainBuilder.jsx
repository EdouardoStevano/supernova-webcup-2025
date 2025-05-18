import React, { useRef, useState } from 'react';
import EditorCanvas from '../../../components/builder/EditorCanvas';
import { useFarewell } from '../../../../context/FarewellContext';
import { motion } from 'framer-motion';
import { Share2, Palette, Image as ImageIcon, Eye } from 'lucide-react';

const MainBuilder = () => {
    const { farewellPage, setBackground } = useFarewell();
    const fileInputRef = useRef(null);
    const [showPreview, setShowPreview] = useState(false);

    const backgrounds = [
        {
            name: 'Dramatic',
            value: 'dramatic-bg',
            preview: 'bg-gradient-to-r from-[#1f1c2c] to-[#928dab]',
        },
        {
            name: 'Ironic',
            value: 'ironic-bg',
            preview: 'bg-gradient-to-r from-[#fceabb] to-[#f8b500]',
        },
        {
            name: 'Cringe',
            value: 'cringe-bg',
            preview: 'bg-gradient-to-r from-[#ff4e50] to-[#f9d423]',
        },
        {
            name: 'Classy',
            value: 'classy-bg',
            preview: 'bg-gradient-to-r from-[#2c3e50] to-[#bdc3c7]',
        },
        {
            name: 'Absurd',
            value: 'absurd-bg',
            preview:
                'bg-gradient-to-r from-[#fc466b] via-[#3f5efb] to-[#00c9ff]',
        },
        {
            name: 'Custom Image',
            value: 'custom-image',
            preview: 'bg-gray-300 flex items-center justify-center',
        },
    ];

    // Handle file input change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setBackground({ type: 'custom-image', url });
        }
    };

    return (
        <div className="flex flex-1 flex-col overflow-hidden p-4">
            {/* Preview Modal */}
            {showPreview && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                    <div className="relative flex h-[90vh] max-h-[90vh] w-[90vw] max-w-6xl flex-col rounded-xl bg-white p-4 shadow-2xl">
                        <button
                            className="absolute top-4 right-6 z-10 text-3xl text-gray-600 hover:text-black"
                            onClick={() => setShowPreview(false)}
                            aria-label="Close preview"
                        >
                            ×
                        </button>
                        <div className="flex-1 overflow-auto rounded-lg bg-gray-100 p-4">
                            {/* Pass previewMode to disable editing */}
                            <EditorCanvas previewMode />
                        </div>
                    </div>
                </div>
            )}

            <div className="glass-panel mb-4 border-purple-500/30 p-4">
                <div className="flex items-center justify-between">
                    <h2 className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent">
                        {farewellPage.tone
                            ? `${farewellPage.tone.charAt(0).toUpperCase() + farewellPage.tone.slice(1)} Farewell`
                            : 'Your Farewell Page'}
                    </h2>

                    <div className="flex items-center gap-2">
                        {/* Background Selector */}
                        <div className="group relative">
                            <motion.button
                                className="glass-button flex items-center gap-2 p-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Palette className="h-4 w-4" />
                                <span>Themes</span>
                            </motion.button>

                            <div className="invisible absolute right-0 z-10 mt-2 w-56 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                                <div className="glass-panel p-2 shadow-xl">
                                    <div className="grid grid-cols-1 gap-2">
                                        {backgrounds.map((bg) => (
                                            <motion.button
                                                key={bg.value}
                                                onClick={() =>
                                                    setBackground(bg.value)
                                                }
                                                whileHover={{ scale: 1.03 }}
                                                className={`flex items-center gap-3 rounded-lg p-2 transition-colors ${
                                                    (
                                                        typeof farewellPage.background ===
                                                        'string'
                                                            ? farewellPage.background ===
                                                              bg.value
                                                            : farewellPage
                                                                  .background
                                                                  ?.type ===
                                                              bg.value
                                                    )
                                                        ? 'border-gradient-to-r border bg-white/10 from-purple-400 to-blue-400'
                                                        : 'hover:bg-white/10'
                                                }`}
                                            >
                                                <div
                                                    className={`h-5 w-5 rounded-full ${bg.preview}`}
                                                >
                                                    {bg.value ===
                                                        'custom-image' && (
                                                        <ImageIcon className="mx-auto my-auto h-4 w-4 text-gray-500" />
                                                    )}
                                                </div>
                                                <span>{bg.name}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                    {/* Show file input if custom image is selected */}
                                    {(farewellPage.background ===
                                        'custom-image' ||
                                        farewellPage.background?.type ===
                                            'custom-image') && (
                                        <div className="mt-2">
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Preview Button */}
                        <motion.button
                            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowPreview(true)}
                        >
                            <Eye className="h-4 w-4" />
                            Preview
                        </motion.button>

                        {/* Share Button */}
                        <motion.button
                            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Share2 className="h-4 w-4" />
                            Publish
                        </motion.button>
                    </div>
                </div>
            </div>

            <div className="glass-panel custom-scrollbar flex-1 overflow-auto p-6">
                <EditorCanvas />
            </div>
        </div>
    );
};

export default MainBuilder;
