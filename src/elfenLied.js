import React from 'react';

const ElfenLiedRoom = () => {
    const blockStyle = {
        maxWidth: '700px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid red',
        borderRadius: '10px',
        color: 'red',
        overflow: 'hidden',
    };

    const linkStyle = {
        display: 'inline-block',
        textDecoration: 'none',
        padding: '5px 10px',
        backgroundColor: 'red',
        color: 'fff',
        borderRadius: '10px',
    };

    return (
        <div>
            <div style={{
                ...blockStyle,
                maxWidth: '700px',
            }}>
                <h1 style={{ textAlign: 'center' }}>Люси</h1>
                <div style={{ display: 'flex' }}>
                    <img style={{ float: 'left', marginRight: '20px', maxWidth: '250px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYS6NBBohDxqjlLXcDPmdctY1pYOrDVpaaQ&usqp=CAU" alt="Image 1" />
                    <div style={{ overflow: 'hidden' }}>
                        <p>Ню / Люси — Главная героиня манги и сериала, молодой диклониус. Девушка с длинными розовыми волосами и небольшими рожками на голове. Согласно манге, она росла в приюте, где над ней постоянно издевались, говорили, что она не человек и что ей нет места среди людей. В аниме её жизнь в детском доме близка к версии манги, за тем исключением, что воспитанники детских домов не утверждают, что ей нет места в этом мире. В итоге, после того, как её предала подруга и дети убили её щенка, у Люси впервые спонтанно пробудились векторы, что и привело к мгновенной смерти детей. </p>
                    </div>
                </div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <a style={linkStyle} href="https://com-x.life/3084-elfen-lied.html">Ссылка</a>
                </div>
            </div>


            <div style={{
                ...blockStyle,
                maxWidth: '700px',
            }}>
                <h1 style={{ textAlign: 'center' }}>Нана</h1>
                <div style={{ display: 'flex' }}>
                    <img style={{ float: 'left', marginRight: '20px', maxWidth: '250px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSydm6Q-CGHT6SCbXe8RxT9cuuHgkE9CFBDg&usqp=CAU" alt="Image 2" />
                    <div style={{ overflow: 'hidden' }}>
                        <p>Диклониус-силпелит. Ей нет восьми лет от роду, хотя она выглядит как молодая девушка из-за своей мутации. По манге у неё фиолетовые волосы, в аниме — красно-розовые.
                            Нана с рождения провела свою жизнь в лаборатории, в которой она была объектом бесконечных опытов, изуродовавших её тело, но не душу. От безумия её спас Курама, оказав ей свою эмоциональную поддержку. Из-за его заботы Нана относится к Кураме как к своему отцу, ничего не зная об окружающем мире и человеческом обществе. Часто говорит о себе в третьем лице, как маленький ребёнок. Нана отказывается убивать людей и мутантов, хотя именно она желает смерти Люси ради спокойствия людей.</p>
                    </div>
                </div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <a style={linkStyle} href="https://com-x.life/3084-elfen-lied.html">Ссылка</a>
                </div>
            </div>

            <div style={{
                ...blockStyle,
                maxWidth: '700px',
            }}>
                <h1 style={{ textAlign: 'center' }}>Марико</h1>
                <div style={{ display: 'flex' }}>
                    <img style={{ float: 'left', marginRight: '20px', maxWidth: '250px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rZ0Et1_ZFO9PwdjqRPcmpvVDDF2AGlkrPg&usqp=CAU" alt="Image 3" />
                    <div style={{ overflow: 'hidden' }}>
                        <p>Силпелит, родная дочь директора Курамы, которую не смог задушить её отец. Поэтому Марико после рождения заточили, по плану Сиракавы и с согласия Какудзавы, в специальном бункере лаборатории. Воспитывается с рождения Сайто, сообщившую ей о том, что её родной отец хотел её убить. По манге она златокудрая блондинка, в аниме у неё волосы светло-розового цвета.
                            Всю жизнь провела в камере, её жизнь поддерживалась только через шланг с питательными веществами. Находится в плохом физическом состоянии, не в состоянии самостоятельно передвигаться, кроме того, в неё имплантированы бомбы.</p>
                    </div>
                </div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <a style={linkStyle} href="https://com-x.life/3084-elfen-lied.html">Ссылка</a>
                </div>
            </div>
        </div>
    );
}

export default ElfenLiedRoom;
