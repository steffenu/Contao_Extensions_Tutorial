
Pseudo Elements am besten über position relative / absolute platzieren.

    .select-wrapper{
        position: relative;
      } 

  

    .select-wrapper:before{
      position: absolute;  
      content: ' ';
      background-image: url({{ asset('bundles/steffenustarter/img/arrow.svg') }});
      background-repeat: no-repeat;
      background-size: 20px 20px;
      height: 20px;
      width: 20px;
      left: -25px;
    }