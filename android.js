        $( ".il_button" ).click(function() {
            $(this).css("background","#AAAAAA");
            Absenden($(this).data("ftaste"));
        });
        
        $( ".btn_scannen" ).click(function() {
            //$(this).css("background","#AAAAAA");
        });
        
        $( ".btn_foto" ).click(function() {
            //$(this).css("background","#AAAAAA");
        });
        
        $(".list_item.gruen").click(function() {
            $(this).css("background","rgb(175, 255, 175)");
            Absenden($(this).data("ftaste"));
        });
        
        $(".list_item.gelb").click(function() {
            $(this).css("background","rgb(255, 255, 188)");
            Absenden($(this).data("ftaste"));
        });
        
        $(".list_item.rot").click(function() {
            $(this).css("background","rgb(255, 183, 183)");
            Absenden($(this).data("ftaste"));
        });
        
        var button_menue_direction = 0;
        
        $('#button_menue_fader').click(function() {
            if(button_menue_direction == 0)
            {
                button_menue_direction = 1;
                $('#button_menue').animate({left:"+=250"},500);
                $('#button_menue_fader_text').html('&lt;&lt;');
            }else{
                button_menue_direction = 0;
                $('#button_menue').animate({left:"-=250"},500);
                $('#button_menue_fader_text').html('&gt;&gt;');
            }
        });
        
        $('#button_menue_list li').click(function() {
            $(this).css("background","#4D4D4D");
            Absenden($(this).data("ftaste"));
        });
        
        $('#footer_buttons li').click(function() {
            $(this).css("background","#4D4D4D");
            Absenden($(this).data("ftaste"));
        });