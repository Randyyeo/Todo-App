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
        
        var remain = date % 10

        if (remain == 1){
            date += "st";
        } else if (remain == 2){
            date += "nd";
        } else if (remain == 3){
            date += "rd";
        } else {
            date += "th";
        } 

       
        var year = d.getFullYear() 
        return day + ", " + date + " " + year
        
        
    }
}
