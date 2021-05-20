export default {
    getDate(){
        var d = new Date();
            var index = d.getDay();
            var days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];
        var day = days[index];
        var date = new Date().getDate()
        
        switch (date % 10) {
            case 1:
                date += "st";
            case 2:
                date +="nd";
            case 3:
                date +="rd";
            default:
                date +="th";
        }
       
        var year = d.getFullYear() 
        return day + ", " + date + " " + year
        
        
    }
}
