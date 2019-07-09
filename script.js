function gitRepo() {
    let gitRepo = new XMLHttpRequest();
    gitRepo.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let gitHubObject = JSON.parse(this.responseText);
            document.getElementById("repo").innerHTML = gitHubObject[0].name;
        }
    };
    gitRepo.open("GET", "https://api.github.com/users/Shewolff182/repos", true);
    gitRepo.send();
}

$(document).ready(function(){
    $("a[target='_blank']").hover(function(){
        $(this).css("color", "aqua");
    }, function(){
        $(this).css("color", "aqua");
    });
});
$(document).ready(function(){
    $("a[target='_blank']").hover(function(){
        $(this).addClass("transform");
    }, function(){
        $(this).removeClass("transform");
    });
});

