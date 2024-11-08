function selectRoomType(roomType) {
    document.getElementById('roomType').value = roomType;
    document.querySelectorAll(".image-gallery figure").forEach(figure => {
        figure.classList.remove("selected");
    });
    document.querySelector(`figure[onclick="selectRoomType('${roomType}')"]`).classList.add("selected");
}
