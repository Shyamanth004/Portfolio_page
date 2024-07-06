var About = document.getElementById("About");
var Skills = document.getElementById("Skills");
var Projects = document.getElementById("Projects");
var Resume = document.getElementById("Resume");
var Contact = document.getElementById("Contact");
var Part = [About, Skills, Projects, Resume, Contact];
var about = document.getElementById("about");
var skills = document.getElementById("skills");
var projects = document.getElementById("projects");
var resume = document.getElementById("resume");
var contact = document.getElementById("contact");
var part = [about, skills, projects, resume, contact];
about.addEventListener("click", function () {
    Part.forEach(function(Item){
        Item.style.height = "0px";
        Item.style.borderWidth = "0px";
    })
    part.forEach(function(item){
        item.style.textDecoration = "none";
    });
    about.style.textDecoration = "underline";
    About.style.height = "580px";
    About.style.borderWidth = "1px";
});
skills.addEventListener("click", function () {
    Part.forEach(function(Item){
        Item.style.height = "0px";
        Item.style.borderWidth = "0px";
    })
    part.forEach(function(item){
        item.style.textDecoration = "none";
    });
    skills.style.textDecoration = "underline";
    Skills.style.height = "580px";
    Skills.style.borderWidth = "1px";
});
projects.addEventListener("click", function () {
    Part.forEach(function(Item){
        Item.style.height = "0px";
        Item.style.borderWidth = "0px";
    })
    part.forEach(function(item){
        item.style.textDecoration = "none";
    });
    projects.style.textDecoration = "underline";
    Projects.style.height = "580px";
    Projects.style.borderWidth = "1px";
});    
resume.addEventListener("click", function () {
    Part.forEach(function(Item){
        Item.style.height = "0px";
        Item.style.borderWidth = "0px";
    })
    part.forEach(function(item){
        item.style.textDecoration = "none";
    });
    resume.style.textDecoration = "underline";
    Resume.style.height = "580px";
    Resume.style.borderWidth = "1px";
});
contact.addEventListener("click", function () {
    Part.forEach(function(Item){
        Item.style.height = "0px";
        Item.style.borderWidth = "0px";
    })
    part.forEach(function(item){
        item.style.textDecoration = "none";
    });
    contact.style.textDecoration = "underline";
    Contact.style.height = "580px";
    Contact.style.borderWidth = "1px";
});
var gmail = document.getElementById("gmail");
var gmail_text = document.getElementById("gmail-text");
gmail.addEventListener("mouseenter",function(){
    gmail_text.style.opacity = "1";
});
gmail.addEventListener("mouseleave",function(){
    gmail_text.style.opacity = "0";
});
text = "shyamanth004@gmail.com";
gmail.addEventListener("click",function () {
    navigator.clipboard.writeText(text);
    alert("Text copied: " + text);
})