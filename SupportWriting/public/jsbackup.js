    function enroll() {
		var firstname = document.getElementById('firstname').value;
		var lastname = document.getElementById('lastname').value;
		var username = firstname[0]+lastname;
		var access_token = '5758~Vcc7w97lgCY4uLTgBaMt7s1Qjko4DAREGaBGinG1qXI480EcCdqAX4AuDmFOX9pC';
		document.getElementById("useroutput").innerHTML = "Username: " + username;
		document.getElementById("passoutput").innerHTML = "Password: 12345678";
        $.ajax( {
            url: 'https://supportwriting.instructure.com/api/v1/accounts/1/users/',
            type: 'POST',
            data: 'user[name]='+firstname+" "+lastname+'&pseudonym[unique_id]='+username+'&pseudonym[password]=12345678&pseudonym[sis_user_id]='+username,
            beforeSend : function( xhr ) {
                xhr.setRequestHeader( "Authorization", "Bearer " + access_token );
            },
        } );
        function enrollUser() {

        $.ajax( {
            url: 'https://supportwriting.instructure.com/api/v1/courses/161/enrollments',
            type: 'POST',
            data: 'enrollment[user_id]=sis_user_id:'+ username +'&enrollment[type]=studentenrollment&enrollment[enrollment_state]=active',
            beforeSend : function( xhr ) {
                xhr.setRequestHeader( "Authorization", "Bearer " + access_token );
            }
        } );
    }