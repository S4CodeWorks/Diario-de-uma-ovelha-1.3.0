export function initializeDiaryEntries() {
    const diaryData = [
        {
            date: '28/04',
            image: 'sheep_cloudy.png',
            content: `
                <p>Hoje o dia estava nublado, úmido e um pouco frio. As ovelhas estavam um pouco agitadas quando abri a porteira. Elas saíram correndo, fazendo o mesmo caminho de sempre - até ficou um rastro no chão! Depois foram pastar e tomar água. Percebi que elas preferem comer gramas baixas, pois são mais novas.</p>
                <p>Mais tarde, deitaram dentro do cercado delas, tomaram água novamente e descansaram um pouco antes de voltar a pastar. Foi interessante ver a ovelha pequena olhando curiosa para um quero-quero, antes de sair correndo. Depois disso, começaram a berrar pedindo comida e ficaram agitadas.</p>
                <p>Quando chegou a hora de fechá-las no cercado, aproximei-me com a comida. A ovelha pequena tentou comer na mão, enquanto a grande ficou mais distante. Coloquei a comida no cocho e esperei elas entrarem para fechar. Depois de um tempo, limpei o pote de água e coloquei água nova. Após se alimentarem, foram deitar para dormir.</p>
            `
        },
        {
            date: '29/04',
            image: 'sheep_cloudy.png',
            content: `
                <p>Hoje o dia estava nublado e frio. Acordei com os berros das ovelhas que pediam para abrir o portão. Quando abri, elas seguiram pelo caminho de sempre. Ficaram pastando por um tempo e depois deitaram no cercado para tomar água.</p>
                <p>Conforme o dia esquentava, buscaram refúgio na sombra. Depois de um tempo, voltaram a pastar, dando voltas e mais voltas pelo pasto. Quando começaram a pedir comida, já estava na hora de fechá-las no cercado.</p>
                <p>Coloquei a comida no cocho, renovei a água e preparei um "colchão" de palha para elas. A pequena logo se acomodou, enquanto a maior, mesmo hesitante no início, acabou deitando também, e assim foram dormir.</p>
            `
        },
        {
            date: '30/04',
            image: 'sheep_cloudy.png',
            content: `
                <p>O dia amanheceu nublado e frio. As ovelhas estavam agitadas para ir pastar. Após abrir o portão, seguiram pelo caminho habitual. Depois de um tempo, deitaram um pouco ao sol, ainda pastando ocasionalmente.</p>
                <p>Mais tarde, foram tomar água e aproveitaram para descansar no cercado. Em determinado momento, o cachorro começou a latir e as ovelhas saíram correndo do cercado, mas não foram muito longe.</p>
                <p>Quando começaram a pedir comida, troquei a água e servi o alimento. Entraram no cercado, comeram, e logo a ovelha pequena se acomodou sobre a palha. Em seguida, todas foram dormir.</p>
            `
        },
        {
            date: '01/05',
            image: 'sheep_cloudy.png',
            content: `
                <p>Hoje amanheceu nublado e frio, com geada. O céu estava limpo, sem nuvens, prometendo sol. As ovelhas estavam um pouco agitadas. Quando abri a porteira, saíram correndo pelo caminho costumeiro.</p>
                <p>Pastaram por um longo período, enfrentando uma ventania forte. Beberam água várias vezes durante a manhã. No meio do dia, quando o sol apareceu e esquentou, permaneceram no cercado.</p>
                <p>À tarde, depois de mais uma pausa para água, voltaram a pastar. Quando ficaram agitadas pedindo comida, já era hora da alimentação. Servi a refeição, troquei a água, e logo se acomodaram sobre a palha para dormir.</p>
            `
        },
        {
            date: '02/05',
            image: 'sheep_cloudy.png',
            content: `
                <p>O dia estava frio e muito úmido, com a grama escorregadia e molhada. As ovelhas, mesmo agitadas pelo frio e umidade, foram rapidamente pastar. Pareciam menos ativas que o normal, provavelmente devido ao clima.</p>
                <p>Após pastarem, foram tomar água. Curiosamente, quando voltaram a pastar, a pequena ficou no cercado enquanto a grande saiu novamente. Começaram a pedir comida antes da hora, então apenas troquei a água e deixei a comida separada.</p>
                <p>Uma hora depois, ainda pastando, coloquei a comida no cocho e as chamei. Entraram no cercado, fechei o portão e elas se alimentaram. Depois da refeição, deitaram-se e adormeceram.</p>
            `
        },
        {
            date: '03/05',
            image: 'sheep_sunny.png',
            content: `
                <p>O dia amanheceu muito frio. As ovelhas estavam ansiosas para sair, pedindo para abrir o portão do cercado. Quando me afastei, saíram em disparada pelo caminho habitual - com um pequeno susto quando a grande quase tropeçou!</p>
                <p>No meio do dia, buscaram água e descansaram longamente no cercado antes de voltar ao pasto. À tarde, enquanto descansavam na grama e a temperatura subia, algo curioso aconteceu: a ovelha pequena, demonstrando sua personalidade aventureira, passou habilmente entre o portão e a cerca elétrica, entrando no pátio.</p>
                <p>Na hora da alimentação, a pequena correu em minha direção - por um momento, pensei que fosse pular! Mas ela apenas queria comer da minha mão. Depois de servir a comida no cocho, ela retornou pelo mesmo caminho improvável entre o portão e a cerca. Troquei a água, fechei o cercado e ofereci um pouco de pasto extra antes delas se acomodarem para dormir.</p>
            `
        },
        {
            date: '04/05',
            image: 'sheep_sunny.png',
            content: `
                <p>O dia estava especialmente agradável, com um sol magnífico. As ovelhas, ansiosas como sempre, pediram para sair e, assim que abri o portão, partiram animadamente pelo caminho costumeiro, demonstrando uma energia extra para o pastoreio.</p>
                <p>No meio do dia, começaram a berrar pedindo comida antes da hora habitual. Após um tempo, fizeram uma pausa para beber água e descansar. Quando retornaram ao pasto, presenciamos uma cena adorável: a ovelha pequena começou a circular ao redor da grande, antes de disparar em direção ao cercado, claramente sinalizando seu desejo por comida.</p>
                <p>Na hora da alimentação, mesmo tendo voltado ao pasto, vieram correndo assim que coloquei a comida no cocho. Com o céu já escurecido, providenciei água fresca e um pouco de pasto extra para a noite. Logo se acomodaram e adormeceram tranquilamente.</p>
            `
        },
        {
            date: '05/05',
            image: 'sheep_sunny.png',
            content: `
                <p>Hoje o dia estava um pouco frio mais agradável. As ovelhas estavam pedindo para abrir o portão, um pouco agitadas. Quando abri o portão, elas foram pelo mesmo caminho, mas curiosamente não foram muito longe - pararam na frente do cercado. Geralmente quando abro o portão elas correm até o final da cerca.</p>
                <p>No meio do dia, foram tomar água e ficaram muito tempo deitadas. Acredito que haviam comido muito pasto e agora estavam descansando. Ficaram até de tarde, quando voltaram a pastar. Depois começaram a pedir comida e, como já estava na hora, coloquei a comida num pote. Ao ouvirem o barulho, correram para o cercado.</p>
                <p>Coloquei a comida no cocho e elas comeram. Troquei a água e recolhi os cocos do chão, separando para fazer adubo. Depois que se alimentaram, deitaram e adormeceram.</p>
            `
        },
        {
            date: '06/05',
            image: 'sheep_sunny.png',
            content: `
                <p>O dia amanheceu um pouco frio mais agradável. Escutei os berros das ovelhas pedindo para abrir o portão. Quando abri, foram correndo pastar pelo mesmo caminho. Hoje estavam menos agitadas que nos outros dias, acredito que seja por conta do tempo.</p>
                <p>No meio dia não foram tomar água porque tinham ido mais cedo. Ficaram pastando e depois de um tempo foram beber água novamente, retornando ao pasto. Permaneceram até tarde pastando.</p>
                <p>Quando chegou a hora do trato, vieram correndo comer. Coloquei a comida no cocho e troquei a água. Depois de escurecer, deitaram e adormeceram.</p>
            `
        },
        {
            date: '07/05',
            image: 'sheep_sunny.png',
            content: `
                <p>O dia estava um pouco frio mas agradável. As ovelhas, agitadas, pediam para abrir a porteira. Quando abri, saíram correndo pelo caminho habitual. Pastaram por um bom tempo antes de irem tomar água no cercado.</p>
                <p>No meio-dia, ficaram deitadas no cercado até mais tarde. A pequena saiu correndo para pastar, enquanto a grande permaneceu. Um momento interessante aconteceu quando viram uma lebre - a ovelha foi atrás, provavelmente curiosa com o animal desconhecido. A ovelha grande seguiu-a, berrando, e a pequena correu para ela para mamar.</p>
                <p>Depois disso, pastaram por um bom tempo até começar a escurecer. Começaram a pedir comida antes da hora, então aguardei. Quando chegou o momento, coloquei a ração no cocho silenciosamente. A pequena correu para comer, e fiquei num canto para que a grande entrasse também. Após fechá-las, troquei a água. Terminada a refeição, beberam água, deitaram sobre a palha e adormeceram.</p>
            `
        },
    ];

    const diaryEntriesHTML = diaryData.map((entry, index) => `
        <div class="diary-entry" id="day-${index + 1}" style="display: ${index === 0 ? 'block' : 'none'}">
            <h2>Dia ${entry.date}</h2>
            <div class="entry-content">
                <img src="${entry.image}" alt="Ovelha" class="diary-image">
                <div class="entry-text">${entry.content}</div>
            </div>
        </div>
    `).join('');

    document.getElementById('diary-entries').innerHTML = diaryEntriesHTML;
}

window.showDay = (dayNumber) => {
    document.querySelectorAll('.diary-entry').forEach(entry => {
        entry.style.display = 'none';
    });
    
    document.getElementById(`day-${dayNumber}`).style.display = 'block';
    
    document.querySelectorAll('.day-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelectorAll('.day-button')[dayNumber-1].classList.add('active');

    smoothScrollToContent();
};

function smoothScrollToContent() {
    const headerHeight = document.querySelector('.header').offsetHeight;
    window.scrollTo({
        top: headerHeight,
        behavior: 'smooth'
    });
}