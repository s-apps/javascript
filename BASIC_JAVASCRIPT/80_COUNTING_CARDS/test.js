var count = 0;

function cc(card) {
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
        break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
        break;                                            
    }
    if (count > 0){
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

//cc(3); cc(2); cc('A'); cc(10); cc('K');
//cc(7);cc(8);cc(9);
cc(2);cc(3);cc(4);cc(5);cc(6);
