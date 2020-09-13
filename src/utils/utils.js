export const extractDateString = (str) => {
    const day = + str.split('T')[0].split('-')[2],
        time = str.split('T')[1].slice(0,5);
    let month;

    switch (str.split('T')[0].split('-')[1]){
        case '01':
            month = 'January';
        break;
        case '02':
            month = 'February';
        break;
        case '03':
            month = 'March';
        break;
        case '04':
            month = 'April';
        break;
        case '05':
            month = 'May';
        break;
        case '06':
            month = 'June';
        break;
        case '07':
            month = 'July';
        break;
        case '08':
            month = 'August';
        break;
        case '09':
            month = 'September';
        break;
        case '10':
            month = 'October';
        break;
        case '11':
            month = 'November';
        break;
        case '12':
            month = 'December';
        break;
    }
    
    return `${day} ${month}, ${time}`
}

export const calcAspectRatio = (width, height) => {
    return Math.round((height * 100) / width);
}

export const isEmpty = (obj) =>{
    for (let key in obj) {
      return false;
    }
    return true;
}