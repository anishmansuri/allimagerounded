module.exports  =  function AllImageRouned(options) {
    const getImages = document.getElementsByTagName('img');
    for (let i = 0; i < getImages.length; i++) {
        let element = getImages[i];
        
        if (options) {
            element.style.borderRadius='100%';
        }else{
            element.style.borderRadius = 0;
        }
    }
}
