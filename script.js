
document.addEventListener('DOMContentLoaded', function () {
    var day = document.querySelector('#day');
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        day.appendChild(option);
    }
});
document.addEventListener('DOMContentLoaded',function(){
    var month =document.querySelector('#month');
var months =[
    'January','February','March',
    'April','May','June',
    'July','August','Sepetember',
    'October','November','December'];
for(var i=0;i<months.length;i++){
    var option = document.createElement('option');
    option.value=months[i];
    option.textContent=months[i];
    month.appendChild(option);
}
});

document.addEventListener('DOMContentLoaded',function(){
    var year= document.querySelector('#year');
    for(var i=2023; i>=1963;i-- ){
        var option= document.createElement('option');
        option.value=i+1;
        option.textContent=i;
        year.appendChild(option);

    }
});

document.addEventListener('DOMContentLoaded',function(){
    var button=document.querySelector('#proceedBtn');
    button.addEventListener('click',function(){
        var selectedyear =document.querySelector('#year').value;
        // var selectedmonth=parseInt(document.querySelector('#month').value);
        var selectedday  =document.querySelector('#day').value;
        
        var eighteenYearsago=new Date();
        eighteenYearsago.setFullYear(eighteenYearsago.getFullYear()-18);
        var selectedDate=new Date(selectedyear,selectedday);

        if (selectedDate < eighteenYearsago){
            alert('you will be allowed to this page');
            window.location.href ="steam.html"
        }else {
            alert('stay away kid');

        }


    });
});