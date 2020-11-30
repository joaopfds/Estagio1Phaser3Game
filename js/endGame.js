class EndGame extends Phaser.Scene
{

    constructor()
    {
        super("EndGame");
    }

  

    create()
    {    
        this.add.image(0,0,"home").setOrigin(0,0);
        
        this.t = (120 - game.scene.keys["PlayGame"].tempo);
        if(game.scene.keys["PlayGame"].inimigos > 0){
            this.add.text(360,300,"Você falhou, tente novamente", {fontSize:'22px', fill:'purple', font: 'bold 25px Arial',backgroundColor: "gray",});
        }
        else{
            if( this.t > 60){
                this.add.text(360,300,"Seu tempo foi de: 1:" + (this.t - 60) + ' Segundos !', {fontSize:'22px', fill:'purple', font: 'bold 25px Arial',backgroundColor: "gray",});    
            }
            else{
                this.add.text(360,300,"Seu tempo foi de: 0:" + this.t + ' Segundos !', {fontSize:'22px', fill:'purple', font: 'bold 25px Arial',backgroundColor: "gray",});
            }
            
        }
        
        game.scene.keys["PlayGame"].tempo = 120;
        game.scene.keys["PlayGame"].timer = 118
        let btnPlay = this.add.image(435,400,"btnPlay").setOrigin(0,0);
        this.buttonText = this.add.text(440,413, "JOGAR NOVAMENTE", {
            fontSize: "20px",
            fill: "#ffff",
          });
        btnPlay.setInteractive();

        let btnHome = this.add.image(435,500,"btnPlay").setOrigin(0,0);
        this.buttonText = this.add.text(500,508, "MENU", {
            fontSize: "30px",
            fill: "#ffff",
          });
        btnHome.setInteractive();

        //Adicionar o clique do botao
        btnPlay.on("pointerdown", () => this.scene.start("PlayGame"));
        btnHome.on("pointerdown", () => this.scene.start("HomeGame"));
    }
}
