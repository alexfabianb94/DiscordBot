const tuetue = {
    count: 0,
    icon: ':clap:',
    file: "static/images/tuetue.webp",
    audio: 'static/audio/tuetue.wav'
  };

const fanswers = {
    '!telacreiste': {msg: '', files: ['static/images/telacreiste.gif']},
    '!rosamel': {msg: '', files: ['static/images/rosamel.webp']},
    '!cataldo': {msg: '', files: ['static/images/cataldo.webp']},
    '!elsantelices': {msg: '', files: ['static/images/elsantelices.webp']},
    '!linfati': {msg: '', files: ['static/images/linfati.webp']},
    '!entroporaca': {msg: '', files: ['static/images/entroporaca.webp', 
                                        'static/images/salioporaca.webp']},
    '!jerry': {msg: '', files: ['static/images/jerry.webp']},
    '!perro': {msg: '', files: ['static/images/perro.webp']},
    '!chayanne': {msg: '', files: ['static/images/chayanne.webp']},
    '!tepillamos': {msg: '', files: ['static/images/tepillamos.webp']},
    '!ubb': {msg: '', files: ['static/images/ubb.webp']},
    '!mechones': {msg: '', files: ['static/images/mechones.webp']},
}

const tanswers = {
    '!ayudita': {msg: 'Comandos disponibles: '}
}

const audio_response = {
    '!risas': {msg: '', audio: 'static/audio/don-ramon.webm'},
    '!chipamogli': {msg: '', audio: 'static/audio/chipamogli.webm'},
    '!platano': {msg: '', audio: 'static/audio/platano.webm'},
    '!eo': {msg: '', audio: 'static/audio/eo.webm'},
    '!ladcobra': {msg: '', audio: 'static/audio/lad-cobra.webm',
                          files: ['https://media.cnnchile.com/2019/03/lad-cobra-06.jpg']},
    '!panchito': {msg: '', audio: 'static/audio/pancho-saavedra.webm', 
                            files: ['static/images/pancho-saavedra.jpg']},
    '!lucho': {msg: '', audio: 'static/audio/lucho.webm'},
    '!avemaria': {msg: '', audio: 'static/audio/ave-maria.webm'},
    '!nooo': {msg: '', audio: 'static/audio/noo.mp3'},
    '!bastalda': {msg: '', audio: 'static/audio/bastalda.webm'},
    '!publico': {msg: '', audio: 'static/audio/publico.webm'},
    '!adioschimuelo': {msg: '', audio: 'static/audio/adioschimuelo.webm',
                                files: ['static/images/juegos-del-hambre.gif']},
    '!chimuelo': {msg: '', audio: 'static/audio/chimuelo.webm'},
    '!ilamore': {msg: '', audio: 'static/audio/ilamore.webm'},
    '!teleton': {msg: '', audio: 'static/audio/teleton.webm'},
    '!diaplatano': {msg: '', audio: 'static/audio/diaplatano.webm'},
    '!cerveza': {msg: '', audio: 'static/audio/cerveza.webm'},
    '!impacto': {msg: '', audio: 'static/audio/impacto.webm'},
    '!dramatico': {msg: '', audio: 'static/audio/dramatico.webm'},
    '!hermogenes': {msg: '', audio: 'static/audio/hermogenes.webm'},
    '!tuetuetue': {msg: '', audio: 'static/audio/tuetue.wav'},
}




module.exports = {
    tuetue: tuetue,
    fanswers: fanswers,
    audio_response: audio_response,
    tanswers: tanswers
};