export const exportFarewellPageWithEmbedding = async (farewellPage) => {
    // Create a new HTML document
    const exportDoc =
        document.implementation.createHTMLDocument('Farewell Page');

    // Add title
    exportDoc.title = 'My Farewell Page';

    // Create the basic HTML structure
    const head = exportDoc.head;
    const body = exportDoc.body;

    // Add meta tags
    const metaCharset = exportDoc.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.appendChild(metaCharset);

    const metaViewport = exportDoc.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0'
    );
    head.appendChild(metaViewport);

    // Add styles
    const styleElement = exportDoc.createElement('style');
    styleElement.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      overflow: hidden;
      width: 100vw;
      height: 100vh;
    }
    .farewell-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .element {
      position: absolute;
      transform-origin: top left;
    }
    .element img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .text-element {
      overflow-wrap: break-word;
      word-wrap: break-word;
    }
  `;
    head.appendChild(styleElement);

    // Create the main container
    const container = exportDoc.createElement('div');
    container.className = 'farewell-container';

    // Apply background
    if (typeof farewellPage.background === 'string') {
        // Handle gradient backgrounds
        switch (farewellPage.background) {
            case 'default-bg':
                container.style.background = '#ffffff';
                break;
            case 'dramatic-bg':
                container.style.background =
                    'linear-gradient(to right, #1f1c2c, #928dab)';
                break;
            case 'ironic-bg':
                container.style.background =
                    'linear-gradient(to right, #fceabb, #f8b500)';
                break;
            case 'cringe-bg':
                container.style.background =
                    'linear-gradient(to right, #ff4e50, #f9d423)';
                break;
            case 'classy-bg':
                container.style.background =
                    'linear-gradient(to right, #2c3e50, #bdc3c7)';
                break;
            case 'absurd-bg':
                container.style.background =
                    'linear-gradient(to right, #fc466b, #3f5efb, #00c9ff)';
                break;
            default:
                container.style.background = '#ffffff';
        }
    } else if (farewellPage.background?.type === 'custom-image') {
        try {
            // Handle custom image background by embedding it
            const backgroundImageUrl = farewellPage.background.url;
            const imgData = await fetchAndConvertToBase64(backgroundImageUrl);
            container.style.backgroundImage = `url(${imgData})`;
            container.style.backgroundSize = 'cover';
            container.style.backgroundPosition = 'center';
        } catch (error) {
            console.error('Error embedding background image:', error);
            container.style.background = '#ffffff';
        }
    }

    // Enhanced function to fetch a URL and convert it to a base64 data URL
    async function fetchAndConvertToBase64(url) {
        // Skip base64 conversion if the URL is already a data URL
        if (url.startsWith('data:')) {
            return url;
        }

        try {
            // Check if it's a blob URL (local files)
            if (url.startsWith('blob:')) {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const blob = await response.blob();

                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = (error) => {
                        console.error('FileReader error:', error);
                        reject(error);
                    };
                    reader.readAsDataURL(blob);
                });
            } else {
                // For external URLs (like Giphy), we'll try to fetch them
                // If CORS fails, we'll return the original URL
                const response = await fetch(url, {
                    mode: 'cors',
                    credentials: 'omit',
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const blob = await response.blob();

                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = (error) => {
                        console.error('FileReader error:', error);
                        reject(error);
                    };
                    reader.readAsDataURL(blob);
                });
            }
        } catch (error) {
            console.warn(
                'Could not fetch and convert to base64, using original URL:',
                url,
                error
            );
            // Return the original URL if embedding fails
            // This allows the GIF to still work if the user has internet access
            return url;
        }
    }

    // Enhanced function specifically for handling GIFs with better error handling
    async function handleGifElement(element, elementDiv, exportDoc) {
        try {
            const gif = exportDoc.createElement('img');
            gif.alt = 'Animated GIF';

            let gifSrc;
            const originalSrc = element.src || element.content;

            if (!originalSrc) {
                throw new Error('No GIF source found');
            }

            if (originalSrc.startsWith('data:')) {
                // Already a data URL, use as-is
                gifSrc = originalSrc;
            } else {
                // Try to convert to base64, but fallback to original URL if CORS fails
                try {
                    gifSrc = await fetchAndConvertToBase64(originalSrc);
                    console.log('Successfully embedded GIF as base64');
                } catch (embedError) {
                    console.warn(
                        'Could not embed GIF, using original URL:',
                        embedError
                    );
                    gifSrc = originalSrc;
                }
            }

            gif.src = gifSrc;

            // Add error handling for the image element
            gif.onerror = function () {
                console.error('GIF failed to load:', originalSrc);
                this.style.display = 'none';

                // Create fallback element
                const errorDiv = exportDoc.createElement('div');
                errorDiv.innerHTML = `
          <div style="text-align: center;">
            <p style="color: #666; margin-bottom: 8px;">GIF could not be loaded</p>
            <a href="${originalSrc}" target="_blank" style="color: #007bff; text-decoration: underline; font-size: 12px;">
              View original GIF
            </a>
          </div>
        `;
                errorDiv.style.cssText = `
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #ccc;
          background-color: #f9f9f9;
          font-size: 14px;
        `;
                elementDiv.appendChild(errorDiv);
            };

            gif.onload = function () {
                console.log('GIF loaded successfully');
            };

            elementDiv.appendChild(gif);
        } catch (error) {
            console.error('Error processing GIF:', error);

            // Create error fallback with link to original
            const originalSrc = element.src || element.content;
            const errorDiv = exportDoc.createElement('div');
            errorDiv.innerHTML = `
        <div style="text-align: center;">
          <p style="color: #666; margin-bottom: 8px;">GIF failed to load</p>
          ${originalSrc ? `<a href="${originalSrc}" target="_blank" style="color: #007bff; text-decoration: underline; font-size: 12px;">View original GIF</a>` : ''}
        </div>
      `;
            errorDiv.style.cssText = `
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed #ccc;
        background-color: #f9f9f9;
        font-size: 14px;
      `;
            elementDiv.appendChild(errorDiv);
        }
    }

    // Process each element on the canvas
    const elementsPromises = farewellPage.elements.map(async (element) => {
        const elementDiv = exportDoc.createElement('div');
        elementDiv.className = 'element';

        // Position the element
        elementDiv.style.left = `${element.position.x}px`;
        elementDiv.style.top = `${element.position.y}px`;

        // Add width and height if available
        if (element.size) {
            elementDiv.style.width = `${element.size.width}px`;
            elementDiv.style.height = `${element.size.height}px`;
        }

        // Apply the appropriate content based on element type
        switch (element.type) {
            case 'text':
                // Apply text styling
                elementDiv.className += ' text-element';
                elementDiv.style.fontFamily = element.style?.font || 'Arial';
                elementDiv.style.color = element.style?.color || '#000000';
                elementDiv.style.fontWeight =
                    element.style?.fontWeight || 'normal';
                elementDiv.style.fontStyle =
                    element.style?.fontStyle || 'normal';
                elementDiv.style.textDecoration =
                    element.style?.textDecoration || 'none';
                elementDiv.style.fontSize = element.style?.fontSize || '16px';
                elementDiv.style.lineHeight =
                    element.style?.lineHeight || '1.5';
                elementDiv.style.textAlign = element.style?.textAlign || 'left';

                // Add the text content
                elementDiv.innerHTML = element.content || '';
                break;

            case 'image':
                try {
                    // Create an image element with embedded data
                    // Handle both 'src' and 'content' properties
                    const imageSrc = element.src || element.content;
                    if (!imageSrc) {
                        throw new Error('No image source found');
                    }

                    const img = exportDoc.createElement('img');
                    img.src = await fetchAndConvertToBase64(imageSrc);
                    img.alt = 'Farewell page image';

                    // Add error handling
                    img.onerror = function () {
                        console.error('Image failed to load:', imageSrc);
                        this.style.display = 'none';

                        const errorDiv = exportDoc.createElement('div');
                        errorDiv.textContent = 'Image failed to load';
                        errorDiv.style.cssText = `
              color: red;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 2px dashed #ccc;
              background-color: #f9f9f9;
            `;
                        elementDiv.appendChild(errorDiv);
                    };

                    elementDiv.appendChild(img);
                } catch (error) {
                    console.error('Error embedding image:', error);
                    const errorDiv = exportDoc.createElement('div');
                    errorDiv.textContent = 'Image failed to load';
                    errorDiv.style.cssText = `
            color: red;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px dashed #ccc;
            background-color: #f9f9f9;
          `;
                    elementDiv.appendChild(errorDiv);
                }
                break;

            case 'gif':
                // Use the enhanced GIF handler
                // Note: GIF elements use 'content' property for URL, not 'src'
                const gifElement = {
                    ...element,
                    src: element.content || element.src,
                };
                await handleGifElement(gifElement, elementDiv, exportDoc);
                break;

            default:
                console.warn(`Unsupported element type: ${element.type}`);
                const unknownDiv = exportDoc.createElement('div');
                unknownDiv.textContent = `Unknown element type: ${element.type}`;
                unknownDiv.style.cssText = `
          color: gray;
          border: 1px dashed gray;
          padding: 10px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        `;
                elementDiv.appendChild(unknownDiv);
        }

        return elementDiv;
    });

    // Wait for all elements to be processed
    const elementDivs = await Promise.all(elementsPromises);

    // Add all elements to the container
    elementDivs.forEach((div) => container.appendChild(div));

    // Add the container to the body
    body.appendChild(container);

    // Add meta information
    const metaInfo = exportDoc.createElement('div');
    metaInfo.style.cssText = `
    position: fixed;
    bottom: 5px;
    right: 5px;
    font-size: 10px;
    color: rgba(0,0,0,0.3);
    z-index: 1000;
  `;
    metaInfo.textContent = `Created on ${new Date().toLocaleDateString()}`;
    body.appendChild(metaInfo);

    // Add basic interactivity script with error handling
    const script = exportDoc.createElement('script');
    script.textContent = `
    // Add any interactive behaviors here
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Farewell page loaded successfully!');
      
      // Add additional error handling for any images that might fail
      const images = document.querySelectorAll('img');
      images.forEach(function(img) {
        if (!img.onerror) {
          img.onerror = function() {
            console.error('Image failed to load:', this.src);
            this.style.display = 'none';
            
            const parent = this.parentElement;
            if (parent && !parent.querySelector('.error-message')) {
              const errorDiv = document.createElement('div');
              errorDiv.className = 'error-message';
              errorDiv.textContent = 'Media failed to load';
              errorDiv.style.cssText = 'color: red; text-align: center; padding: 20px;';
              parent.appendChild(errorDiv);
            }
          };
        }
      });
    });
  `;
    body.appendChild(script);

    // Serialize the HTML document to a string
    const htmlContent = new XMLSerializer().serializeToString(exportDoc);

    // Create a full HTML document with DOCTYPE
    const fullHtml = `<!DOCTYPE html>
${htmlContent}`;

    // Create a blob with the HTML content
    const blob = new Blob([fullHtml], { type: 'text/html' });

    // Generate a UUID for the filename
    const uuid =
        typeof crypto !== 'undefined' && crypto.randomUUID
            ? crypto.randomUUID()
            : Math.random().toString(36).substring(2, 10); // fallback if crypto.randomUUID is unavailable

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${uuid}.html`;

    // Trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Clean up the URL object
    URL.revokeObjectURL(downloadLink.href);

    return true;
};
