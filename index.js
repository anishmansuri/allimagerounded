function AllImageRouned(options) {
    const getImages = document.querySelector('img');
    if (options) {
        getImages.style.borderRadius='100%';
    }else{
        getImages.style.borderRadius = 0;
    }
}

module.export.AllImageRouned = AllImageRouned