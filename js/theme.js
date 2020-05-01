let buttom = document.getElementById("theme_b");
let light = true;

let dark={
        body: "#1a1a1a",
        h4: "#ba8711",
        back_foot:"#1a1a1a",
        gold:"#ba8711",
        blue: "#31819c",
        buttom_col: "#375d7a",
        photo: "url('../images/live04.jpg') no-repeat center center",
        border_bottom: "1px solid ##31819c",
        greench: "#0a6d53",
        margin: "3px",
        change: "1 px solid green"
}

function clicking(dark){
        let i;
        let this_body=document.getElementsByTagName('body')[0];
        this_body.style.backgroundColor=dark.body;

        const log1 = document.querySelector(".logo");
        const log2 = log1.querySelector('span');

        log1.style.color = dark.greench;
        log2.style.color = dark.gold;

        const info1 = document.querySelector(".core");
        info1.style.color = dark.gold;

        for(i = 0; i < 6; i++) {
                let p_change = document.getElementsByClassName("col-xs-12 col-sm-4 col-md-4 col-lg-4")[i];
                p_change.style.color = dark.h4;
        }

        let foot_col=document.getElementById("main-footer");
        foot_col.style.backgroundColor = dark.back_foot;
        foot_col.style.color = dark.blue;

        let feat=document.getElementById("features");
        for(i = 0; i < 6; i++) {
                let feat_col = feat.getElementsByClassName("fa")[i];
                feat_col.style.color = dark.blue;
        }

        let menu_dk=document.getElementsByTagName("li")[0];
        menu_dk.style.background = dark.body;

        let btn = document.getElementById("theme_b");
        btn.style.background = dark.buttom_col;

        let pics = document.getElementByID("showcase")[0];
        pics.style.background = dark.photo;

        let core=document.getElementById("info")[0];
        for(i = 0; i < 6; i++) {
                let checked = core.getElementsByClassName("fa fa-check")[i];
                checked.style.color = dark.gold;
        }

        const pr_txt = document.querySelector(".primary-text");
        const prt_col = pr_txt.querySelector('span');
        prt_col.style.color = dark.greench;

        let inner_content=wrapper.getElementsByClassName("inner-content");
        let subm=wrapper.getElementsByClassName("subm_buttom");
        for(i=0; i<text_h2.length; i++){
                text_h2[i].style.background=dark.gold;
        }
        for(i=0;i<inner_content.length;i++){
                inner_content[i].style.background=dark.body;
        }
        for(i=0;i<select.length;i++){
                select[i].style.backgroundColor=dark.gold;
                select[i].style.boxShadow=dark.sel;
        }
        for(i=0;i<subm.length;i++){
                subm[i].style.backgroundColor=dark.buttoms;
                subm[i].style.boxShadow=dark.sel;
        }

        let change_b1=document.getElementById("theme_b");
        change_b1.style.display="block";
        change_b1.style.backgroundColor=dark.borderBottom;
        change_b1.style.borderColor=dark.change;
        change_b1.style.boxShadow=dark.back_foot;
        change_b1.style.marginRight=dark.margin;

};

buttom.addEventListener("click", function(){
        if(light){
                clicking(dark);
                light=false;
        }
        else{
                clicking();
                light=true;
        }
});