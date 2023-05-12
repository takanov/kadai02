//じゃんけんゲームの関数
function junken (){
    //じゃんけんゲームの処理

    //勝敗のidの取得
    const judge = document.querySelector("#judgment");
    //console.log(judge.id);
    const meid = document.querySelector("#me");
    const comid = document.querySelector("#com");
    const me = "あなた";
    const com = "コンピューター";

    //配列に格納して、じゃんけんボタンのラベルを取得。
    const junken_items = ["ぐー","ちょき","ぱー"];
    console.log(junken_items);
    let result = "ポン";

    //表示の処理
    const gu = document.querySelector("#gu__btn");
    const choki = document.querySelector("#choki__btn");
    const par = document.querySelector("#par__btn");
    const p_content = document.querySelector("#play_contents > .junken_lists");

    //条件分岐させてそれぞれの表示での勝敗を記載する
    $("#gu__btn").on("click",function(){
        let view = "";
        let cp_view ="";

        //乱数
        let random = Math.floor(Math.random() * junken_items.length);           
        console.log(junken_items[random],"じゃんけん（PC）");
        cp_view = junken_items[random];

        if (junken_items[random]==="ぐー") {
            view = "あいこ";
            //画像を表示するimgタグをDOMツリーから探す
            let target = document.querySelector ("#pc_hands");
            //見つけたimgタグのsrc属性に表示したい画像ファイルを指定
            target.src = "img/janken-plate_gu.png";
        } else if (junken_items[random]==="ちょき") {
            view = "勝ち";
            //画像を表示するimgタグをDOMツリーから探す
            let target = document.querySelector ("#pc_hands");
            //見つけたimgタグのsrc属性に表示したい画像ファイルを指定
            target.src = "img/janken-plate_choki.png";
        } else {
            view = "負け";
            //画像を表示するimgタグをDOMツリーから探す
            let target = document.querySelector ("#pc_hands");
            //見つけたimgタグのsrc属性に表示したい画像ファイルを指定
            target.src = "img/janken-plate-par.png";
        }
        // 表示処理
        //$("#pc_hands").style.display = "none";
        
        gu.style.display = "block";
        choki.style.display = "none";
        par.style.display = "none";
        p_content.style.width = "300px";
        p_content.style.margin = "0px";
        p_content.style.flexDirection = "column";
        meid.style.display = "block";
        comid.style.display = "block";
        $("#me").html(me);
        $("#com").html(com);
        $("#judgment").html(view);
        $("#kakegoe").html(result);
    });

    $("#choki__btn").on("click",function(){

        let view = "";
        let cp_view ="";

        //乱数
        let random = Math.floor(Math.random() * junken_items.length);           
        console.log(junken_items[random],"じゃんけん（PC）");
        cp_view = junken_items[random];

        if (junken_items[random]==="ぐー") {
            view = "負け";
            //画像を表示するimgタグをDOMツリーから探す
            let target = document.querySelector ("#pc_hands");
            //見つけたimgタグのsrc属性に表示したい画像ファイルを指定
            target.src = "img/janken-plate_gu.png";
        } else if (junken_items[random]==="ちょき") {
            view = "あいこ";
            //画像を表示するimgタグをDOMツリーから探す
            let target = document.querySelector ("#pc_hands");
            //見つけたimgタグのsrc属性に表示したい画像ファイルを指定
            target.src = "img/janken-plate_choki.png";
        } else {
            view = "勝ち";
            //画像を表示するimgタグをDOMツリーから探す
            let target = document.querySelector ("#pc_hands");
            //見つけたimgタグのsrc属性に表示したい画像ファイルを指定
            target.src = "img/janken-plate-par.png";
        }
        // 表示処理
        //$("#pc_hands").style.display = "none";

        gu.style.display = "none";
        choki.style.display = "block";
        par.style.display = "none";
        p_content.style.width = "300px";
        p_content.style.margin = "0px";
        p_content.style.margin = "0px";
        p_content.style.flexDirection = "column";
        meid.style.display = "block";
        comid.style.display = "block";
        $("#me").html(me);
        $("#com").html(com);
        $("#judgment").html(view);
        $("#kakegoe").html(result);
    });

    $("#par__btn").on("click",function(){

        let view = "";
        let cp_view ="";

        //乱数
        let random = Math.floor(Math.random() * junken_items.length);           
        console.log(junken_items[random],"じゃんけん（PC）");
        cp_view = junken_items[random];

        if (junken_items[random]==="ぐー") {
            view = "勝ち";
            //画像を表示するimgタグをDOMツリーから探す
            let target = document.querySelector ("#pc_hands");
            //見つけたimgタグのsrc属性に表示したい画像ファイルを指定
            target.src = "img/janken-plate_gu.png";
        } else if (junken_items[random]==="ちょき") {
            view = "負け";
            //画像を表示するimgタグをDOMツリーから探す
            let target = document.querySelector ("#pc_hands");
            //見つけたimgタグのsrc属性に表示したい画像ファイルを指定
            target.src = "img/janken-plate_choki.png";
        } else {
            view = "あいこ";
            //画像を表示するimgタグをDOMツリーから探す
            let target = document.querySelector ("#pc_hands");
            //見つけたimgタグのsrc属性に表示したい画像ファイルを指定
            target.src = "img/janken-plate-par.png";
        }
        // 表示処理
        //$("#pc_hands").style.display = "none";
        gu.style.display = "none";
        choki.style.display = "none";
        par.style.display = "block";
        p_content.style.width = "300px";
        p_content.style.margin = "0px";
        p_content.style.flexDirection = "column";
        meid.style.display = "block";
        comid.style.display = "block";
        $("#me").html(me);
        $("#com").html(com);
        $("#judgment").html(view);
        $("#kakegoe").html(result);
    });
}

function start(){
    $("#start").on("click",function(){
        const play = document.querySelector("#play__junken");
        const startBtn = document.querySelector("#start");
        play.style.display = "block";
        startBtn.style.display = "none";
    });   
}

start();
junken();


//何回勝負するかを決める

//結果の表示

//勝率の表示

//戦歴の保存

//急にバグ発生。戦歴が喰われてなくなる。