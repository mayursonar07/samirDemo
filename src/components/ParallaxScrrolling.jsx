import React, { useEffect, useState } from 'react';

const ParallaxScrolling = () => {
    const [descriptions, setDescriptions] = useState([
        'Description for Image 1',
        'Description for Image 2',
        // Add descriptions for each image
    ]);

    useEffect(() => {
        const images = document.querySelectorAll('.parallax img');
        const content = document.querySelector('.content');
    
        const handleScroll = () => {
            const scrollTop = window.scrollY;
    
            images.forEach((img, index) => {
                const imgTop = img.offsetTop;
                const imgHeight = img.clientHeight;
    
                if (scrollTop >= imgTop - window.innerHeight && scrollTop < imgTop + imgHeight) {
                    // Highlight the current image
                    img.classList.add('highlighted');
    
                    // Display description for the current image
                    setDescriptions(prevDescriptions => {
                        return prevDescriptions.map((desc, i) => (i === index ? desc : ''));
                    });
                } else {
                    img.classList.remove('highlighted');
                }
            });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (        
        <>
        <div className='mainContainerForParallax'>
            <div className="overlay"></div>
            <div className="parallax">
                <div className='imageBox'>Get Started</div>
                <div className='imageBox'>Discover</div>
                <div className='imageBox'>Connect</div>
                <div className='imageBox'>API Purchase</div>
                <div className='imageBox'>Create Apps</div>
                <div className='imageBox'>Build</div>
                <div className='imageBox'>Distribute</div>
                {/* Add more images as needed */}
            </div>
        </div>
        </>
        
    );
};

export default ParallaxScrolling;
