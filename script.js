const msg = document.getElementById("msg");
const image = document.getElementById("imagem");
const dayTime = document.getElementById("daytime");




function changingText(text,hh,mm) {
	msg.innerHTML = `<strong>OLA🖖🏾</strong>, são ${hh} horas e ${mm} minutos.`;
    dayTime.innerText = `É ${text}`;
}

function changingBgColor(color) {
    document.body.style.backgroundColor = `${color}`;
}


function carregar() {
/** função principal que carrega o script
*/
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();

	if (horas >= 0 && horas < 6) {
		//boa madrugada
        changingText('Madrugada',horas,minutos);
		image.src = "imgs/2.jpg";
		changingBgColor('#2B3939');

	} else if (horas < 12) {
		//bom dia
        changingText('Manhã',horas,minutos);
		image.src = "imgs/1.jpg";
        changingBgColor('#E9D985');

	} else if (horas < 18) {
		//boa tarde
        changingText('Tardinha',horas,minutos);
		image.src = "imgs/3.jpg";
        changingBgColor('#f15917');

	} else {
		//boa noite
        changingText('Noite',horas,minutos);
		image.src = "imgs/4.jpg";
        changingBgColor('#222E50');
	}
}

