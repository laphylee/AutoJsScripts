"ui";
ui.layout(
    <vertical>
        <radiogroup>
            <radio id="google" text="Google" checked="true"/>
            <radio id="douban" text="Douban"/>
            <radio id="etyma" text="Etyma"/>
        </radiogroup>
        <input id="query" hint="Search Text...." />
        <button id="search" text="Search" />
    </vertical>
);

//ui.query.setText(getClip());
ui.search.on("click", ()=>{
    var text = ui.query.getText();
    if(ui.douban.checked) {
        app.openUrl("https://m.douban.com/search/?type=movie&query=" + text);
    }
    else if(ui.google.checked) {
        app.openUrl("https://www.google.com/search?q=" + text);
    }
    else if(ui.etyma.checked) {
        app.openUrl("http://laphy.me:1337/?q=" + text);
    }
});
