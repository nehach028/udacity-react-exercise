import React, { Component } from 'react';
class ListofUsers extends Component{
    render(){
      const profiles=this.props.profiles;
      const users=this.props.users;
      const movies=this.props.movies;
      return(
        	
        	<div>
            	<ul>
        		 {
                    profiles.map((profile)=>(
                   		<li key={profile.id}>
                  			<p>{users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}</p>											</li>))
             	 }	
            	</ul>
        	</div>
        );
    }
}
export default ListofUsers;