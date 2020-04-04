const missAnswersResponses = [
    {
        answer: 'look around',
        response:
            'You look around and see a door, and a hallway. You want to burst!'
    },
    {
        answer: 'go down the hall',
        response:
            'You try to move, but you cant! Your gonna crap your pants!'
    },
    {
        answer: 'open door',
        response:
            'You try to open the door, but its sealed shut! You are gonna shit your pants!'
    },
    {
        answer: 'door',
        response:
            'Yes, door is a four letter word and it starts with `D`...'
    },
    {
        answer: 'pants',
        response:
            'Plants'
    },
    {
        answer: 'open the door',
        response:
            'You try to open the door, but its sealed shut! You are gonna shit your pants!'
    },
    {
        answer: 'open',
        response:
            'Open your mind to new things... later... now you need to take a dump!'
    },
    {
        answer: 'go to bathroom',
        response: 'Yea... You rely want to go to the bathroom.'
    },
    {
        answer: 'go to the bathroom',
        response: 'Yea... You rely want to go to the bathroom.'
    },
    { answer: 'go to toilet', response: 'You rely should...' },
    { answer: 'go to the toilet', response: 'You rely should...' },
    {
        answer: 'sit down',
        response: 'You are going to explode. You cant sit down.'
    },
    {
        answer: 'toilet',
        response: 'Yes, you could use a toilet right now...'
    },
    {
        answer: 'sit',
        response: 'You are going to explode. You cant sit down.'
    },
    {
        answer: 'squat',
        response:
            'You are going to explode. You cant do a slav squat now.'
    },
    {
        answer: 'lay',
        response:
            'Why would you even try to lay down? You cant shit laying down!'
    },
    {
        answer: 'lay down',
        response:
            'Why would you even try to lay down? You cant shit laying down!'
    },

    {
        answer: 'look',
        response:
            'You look around and see a door, and a hallway. You want to burst!'
    },
    {
        answer: 'look at door',
        response: 'You take a look at the door. Its shut!'
    },
    {
        answer: 'look at the door',
        response: 'You take a look at the door. Its shut!'
    },
    {
        answer: 'go down the hallway',
        response:
            'You try to move, but you cant! Your gonna crap your pants!'
    },
    {
        answer: 'go to hallway',
        response: 'You wanna go, but you cant!'
    },
    {
        answer: 'go to hall',
        response:
            'You try to move, but you cant! Your gonna crap your pants!'
    },
    { answer: 'go to door', response: 'Oh shiiit!' },
    { answer: 'go to the door', response: 'The door is shut!' },
    {
        answer: 'pee',
        response: 'You dont want to pee, you want to take a shit!'
    },
    {
        answer: 'hold',
        response: 'You Cant hold it! You are going to burst!'
    },
    {
        answer: 'hold it',
        response: 'You Cant hold it! You are going to burst!'
    },
    {
        answer: 'go to wc',
        response: 'Ok, but how!?'
    },
    {
        answer: 'wc',
        response: 'Ok, but how!?'
    },
    {
        answer: 'dont shit your pants',
        response: 'Well, Iam not the one about tho shit my pants...'
    },
    {
        answer: 'don`t shit your pants',
        response: 'I am not the one about tho shit my pants...'
    },
    {
        answer: 'dont shit my pants',
        response: 'Well, you rely dont want to...'
    },
    {
        answer: 'don\'t shit my pants',
        response: 'Well, you rely dont want to...'
    },
    {
        answer: 'don\'t shit your pants',
        response: 'Well, I am not the one about tho shit my pants...'
    },
    {
        answer: 'pick lock',
        response:
            'You are just a bold, sad old man. You dont know how to pick a lock.'
    },
    {
        answer: 'i will die',
        response:
            'You will die of shame if you shit your pants.'
    },
    {
        answer: 'run',
        response: 'There is nowhere to run!'
    },
    {
        answer: 'go',
        response: 'Go where?'
    },
    {
        answer: 'walk',
        response:
            'You should go for a walk, but right now, you have to take a shit.'
    },
    {
        answer: 'find key',
        response: 'What key?'
    },
    {
        answer: 'find the key',
        response: 'What key?'
    },
    {
        answer: 'get the key',
        response: 'What key?'
    },
    {
        answer: 'get key',
        response: 'What key?'
    },
    {
        answer: 'exit',
        response: 'No... you cant leave. Firs you need to take a shit!'
    },
    {
        answer: 'yes',
        response: 'Yes, what?'
    },
    {
        answer: 'sure',
        response: 'Are you sure?'
    },
    {
        answer: 'ok',
        response: 'Is it rely ok to shit your pants?'
    },
    {
        answer: 'dont',
        response: 'Dont what??'
    },
    {
        answer: 'don`t',
        response: 'Dont what??'
    },
    {
        answer: 'kick door',
        response:
            'You try to lift your leg to kick the door, but the pressure of your shit is overwhelming!!'
    },
    {
        answer: 'clean',
        response: 'Its not the time for cleaning...'
    },
    {
        answer: 'asd',
        response: 'Try typing something that makes sense.'
    },
    {
        answer: 'quit',
        response: 'Hahaha, you cant quit.'
    },
    {
        answer: 'what',
        response: 'What do you mean what?.'
    },
    {
        answer: 'enter',
        response: 'Nobody is at the door. Are you talking to yourself?.'
    },
    {
        answer: 'no',
        response: 'What do you mean no? You dont want to shit your pants?.'
    },
    {
        answer: 'i don`t want to take a shit',
        response: 'Ummm... yes you do.'
    },
    {
        answer: 'i don\'t want to take a shit',
        response: 'Ummm... yes you do.'
    },
    {
        answer: 'pusi kurac',
        response: 'Jedi govna.'
    },
    {
        answer: 'hurry',
        response: 'Hurry where?'
    },
    {
        answer: 'i dont want to take a shit',
        response: 'Ummm... yes you do.'
    },
    {
        answer: 'go right',
        response: 'You are right... to think that you can go right, but you cant.'
    },
    {
        answer: 'go left',
        response: 'There is nothing left... for you in this world, but a giant shit.'
    },
    {
        answer: 'go strait',
        response: 'Where is strait? Right or left?'
    },
    {
        answer: 'toilet paper',
        response: 'You should find some after you take a shit.'
    },
    {
        answer: 'take off shoes',
        response: 'Why would you want to take off your shoes?.'
    },
    {
        answer: 'goint to explode',
        response: 'Well... yea...'
    },
    {
        answer: 'yes i whant to take a shit',
        response: 'Good observation!'
    },
    {
        answer: 'yes i am felling it',
        response: 'Yea, you do!'
    },
    {
        answer: 'yes i am',
        response: 'Yes, what?'
    },
    {
        answer: 'maybe',
        response: 'There is no maybe, you should shit now!'
    },
    {
        answer: 'sta je ovo',
        response: 'Igrica, pametnjakovicu...'
    },
    {
        answer: 'sta je ovo?',
        response: 'Igrica, pametnjakovicu...'
    },
    {
        answer: 'okay',
        response: 'Its realy not...'
    },
    {
        answer: 'ok',
        response: 'Its realy not...'
    },
    {
        answer: 'yes please',
        response: 'yes what?'
    },
    {
        answer: 'dick',
        response: 'cunt'
    },
    {
        answer: 'bubs',
        response: 'cunt'
    },
    {
        answer: 'boobs',
        response: 'cunt'
    },
    {
        answer: 'find key for the door',
        response: 'You dont have time!'
    },
    {
        answer: 'find the key for the door',
        response: 'You dont have time!'
    },
    {
        answer: 'find a key for the door',
        response: 'You dont have time!'
    },
    {
        answer: 'go anywhere',
        response: 'You dont have time!'
    },
    {
        answer: 'move',
        response: 'You really shouldnt'
    },
    {
        answer: 'eat shit',
        response: 'Eat a dick'
    },
    {
        answer: 'i do',
        response: 'But what are you going to do about it?'
    },
    {
        answer: 'i know',
        response: 'You know nothing...'
    },
    {
        answer: 'this is stupid',
        response: 'I know what you are, but what am I?'
    },
    {
        answer: 'look left',
        response: 'You look left and see a door'
    },
    {
        answer: 'look for a key',
        response: 'You look around for a key, but see nothing.'
    },
    {
        answer: 'look for the key',
        response: 'You look around for the key, but see nothing.'
    },
    {
        answer: 'check pocket',
        response: 'You find a pack of 10 year old condoms in you pocket.'
    },
    {
        answer: 'check your pocket',
        response: 'You find a pack of 10 year old condoms in you pocket.'
    },
    {
        answer: 'check my pocket',
        response: 'You find a pack of 10 year old condoms in you pocket.'
    },
    {
        answer: 'check pockets',
        response: 'You find a pack of 10 year old condoms in you pocket.'
    },
    {
        answer: 'check your pockets',
        response: 'You find a pack of 10 year old condoms in you pocket.'
    },
    {
        answer: 'check my pockets',
        response: 'You find a pack of 10 year old condoms in you pocket.'
    },
    {
        answer: 'kick the door',
        response: 'You try to lift your leg, but the preasure is unbearable!'
    },
    {
        answer: 'bash the door',
        response: 'You try to lift your leg, but the preasure is unbearable!'
    },
    {
        answer: 'kick door',
        response: 'You try to lift your leg, but the preasure is unbearable!'
    },
    {
        answer: 'bash door',
        response: 'You try to lift your leg, but the preasure is unbearable!'
    },
    {
        answer: 'puke',
        response: 'Why?'
    },
    {
        answer: 'turn left',
        response: 'You try to turn left, but the preasure is unbearable!'
    },
    {
        answer: 'walk left',
        response: 'You try to walk left, but the preasure is unbearable!'
    },
    {
        answer: 'move left',
        response: 'You try to move left, but the preasure is unbearable!'
    },
    {
        answer: 'walk to the door',
        response: 'You try to walk, but the preasure is unbearable!'
    },
    {
        answer: 'take off your shoes',
        response: 'You try to bend over to take off your shoes, but the preasure is unbearable!'
    },
    {
        answer: 'take off shoes',
        response: 'You try to bend over to take off your shoes, but the preasure is unbearable!'
    },
    {
        answer: 'what can i do?',
        response: 'You can take a shit!'
    },
    {
        answer: 'turn the knob',
        response: 'You cant reach it!'
    },
    {
        answer: 'open door knob',
        response: 'You cant reach it!'
    },
    {
        answer: 'turn around',
        response: 'You try to turn around, but the preasure is unbearable!'
    },
    {
        answer: 'hold shit',
        response: 'Hahaha, yea right...'
    },
    {
        answer: 'hold the shit',
        response: 'Hahaha, yea right...'
    },
    {
        answer: 'hold ass',
        response: 'Hahaha, yea right...'
    },
    {
        answer: 'kneel down',
        response: 'Hahaha, yea right...'
    },
    {
        answer: 'smash door',
        response: 'You try to lift your leg, but the preasure is unbearable!'
    },
    {
        answer: 'unseal door',
        response: 'The door is not seald...'
    },
    {
        answer: 'learn to shit your pants',
        response: 'But you already know how to do this.'
    },
    {
        answer: 'fuck you',
        response: 'Eat shit :)'
    },
    {
        answer: 'drink',
        response: 'you will do that after you take a shit'
    },
    {
        answer: 'eat',
        response: 'you will do that after you take a shit'
    },
    {
        answer: 'go outside',
        response: 'But you cant move!'
    },
    {
        answer: 'break the door',
        response: 'You try to lift your leg, but the preasure is unbearable!'
    },
    {
        answer: 'break door',
        response: 'You try to lift your leg, but the preasure is unbearable!'
    },
    {
        answer: 'break the lock',
        response: 'You try to break the lock, but the preasure is unbearable!'
    },
    {
        answer: 'break lock',
        response: 'You try to break lock, but the preasure is unbearable!'
    },
    {
        answer: 'take pants of',
        response: 'its "off" on "of"'
    },
    {
        answer: 'take of pants',
        response: 'its "off" on "of"'
    },
    {
        answer: 'take belt of',
        response: 'its "off" on "of"'
    },
    {
        answer: 'take of belt',
        response: 'its "off" on "of"'
    },
    {
        answer: 'yes i do',
        response: 'I am glad that we agree on this'
    },
    {
        answer: 'yes the presure is rising',
        response: 'I am glad that we agree on this'
    },
    {
        answer: 'i feel the pressure rising',
        response: 'you shure do :)'
    },
    {
        answer: 'glup si',
        response: 'Mama ti glupa'
    },
    {
        answer: 'piss',
        response: 'You dont feel like it'
    },
    {
        answer: 'yes i dont want to shit my pants',
        response: 'I am glad that we agree on this'
    },
    {
        answer: 'i dont want to shit my pants',
        response: 'I am glad that we agree on this'
    },
    {
        answer: 'to shit my pants',
        response: '"Shit your pants will you" Joda...'
    },
    {
        answer: 'that',
        response: 'what'
    },
    {
        answer: 'right',
        response: 'left'
    },
    {
        answer: 'shit game',
        response: 'Thats the name of the game'
    },
    {
        answer: 'stupid game',
        response: 'Make a better one'
    },
    {
        answer: 'close the door',
        response: 'But the door is already closed... What are you talking about?'
    },

];

export default missAnswersResponses;