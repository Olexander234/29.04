let company = prompt('Що ви бажаєте?', '');

if (company == 'чай') {
  alert('Правильно!');
} else {
  alert('Неправильно.');
}





var d = new Date();

alert( d.toString() ); 

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); // 3 января 2014 года
  alert( getWeekDay(date) ); // ПТ