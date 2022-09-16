module.exports =  function (courseName, desc){
    this.courseName =  courseName;
    thiis.desc = desc;
    this.detail =  function (){
        return this.courseName + " " + this.desc;
    };
}