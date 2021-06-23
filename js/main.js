
/*function click(){
    player.strings = player.strings.plus(1);
    document.getElementById('stringAmount').innerHTML = player.strings;
    window.alert(player.strings);
}*/

/*function updateString{
    var element = document.getElementById("stringAmount");
}*/

<script src="index.html"></script>


document.querySelector("#click").onclick = function(){
    player.strings = player.strings.plus(1);
    alert(player.strings)
}