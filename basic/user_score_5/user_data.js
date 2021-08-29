
       var firstName = "Jonathan";
       var lastName = "Almawi";
       var fullname = firstName + " " + lastName;
       var score_current = 8;
       var score_aim = 13;
       score_current++;
       score_current++;
       score_current++;
       score_current++;

       var description = "<h2>" + fullname + "\n" + " is currently at Score:  ";
       var completion_description = "Score Completion is at:";
       var score_left = score_aim - score_current;
       var score_obj = "\n There is left " + score_left + " to do";
       var space = " ";


      document.write(description + score_current + space
          + completion_description + score_aim + score_obj);