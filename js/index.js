//declarar as variaveis para armazenar a posicao do meu botao "no"
let topMod = 0;
let leftMod = 0;
/*adicionando um evento ao corpo da pagina (body) pra que
a funcao do botao (webHandler) seja chamada quando o mouse se mover */
$("body").on("mousemove", webHandler);
//criar a funcao webHandler (botao no desktop)
function webHandler(event){
    //definindo posicao inicial do botal
    let button = $('#no').position();
    //calculando o centro do botao
    let buttonCenter = {
        //colocando uma margem extra de 100px de largura e 40px de altura
        x: button.left + 50,
        y: button.top + 20
    }
    //calcular a distancia entre o cursor do mouse e o centro do botao
    // Math.sqrt(x) raiz quadrada do x
    //Math.pow(base, expoent): eleva a base ao expoente expecificado

    let distance = Math.sqrt(Math.pow(event.pageX - buttonCenter.z, 2))


}
