import { useEffect } from "react";

const LiveChat = () => {
    useEffect(() => {
        // Create script element
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/675d6ea0af5bfec1dbdbb061/1if2fg9bg"; // Replace with your property ID
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        // Append to body
        document.body.appendChild(script);

        return () => {
            // Cleanup script on component unmount
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default LiveChat;


// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/675d6ea0af5bfec1dbdbb061/1if2fg9bg';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->
