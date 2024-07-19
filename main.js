// toggle testimonials
function toggleReview() {
    let hiddenReviewCont=document.getElementById("hidden-reviews");
    hiddenReviewCont.classList.toggle("d-none");
    let revToggleBtn=document.getElementById("rev-toggle-btn");
    if(revToggleBtn.innerHTML==="see more") {
        revToggleBtn.innerHTML="see less"
    } else
    {
        revToggleBtn.innerHTML="see more"
    }
}
//about page read more toggle function
function openMoreAbout(){
    document.getElementById("hidden-about-p").classList.toggle("d-none");
    document.getElementById("lead-hidden-about-p").classList.toggle("d-none");
    if(document.getElementById("about-toggle-btn").innerHTML==="Read more"){
        document.getElementById("about-toggle-btn").innerHTML="See less"
    }else{
        document.getElementById("about-toggle-btn").innerHTML="Read more"
    }
}
//fn to read more of our story
function readMoreStory(){
    document.getElementById("hidden-our-story-p").classList.toggle("d-none");   
    if(document.getElementById("our-story-toggle-btn").innerHTML==="Read more"){
        document.getElementById("our-story-toggle-btn").innerHTML="See less"
    }else{
        document.getElementById("our-story-toggle-btn").innerHTML="Read more"
    }
}


