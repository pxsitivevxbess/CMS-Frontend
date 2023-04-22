import axios from "axios"
const COLLEGE_API_BASE_URL = "http://localhost:8080/api/v1/colleges";

class CollegeService{
  
    getColleges()
    {
        return axios.get(COLLEGE_API_BASE_URL);
    }

    createCollege(college){
        console.log("hi", college); //testing purpose
        return axios.post(COLLEGE_API_BASE_URL,college);
    }

    getCollegeById(collegeId){
        console.log("Calling GetById API");
        return axios.get(COLLEGE_API_BASE_URL + '/' + collegeId);
    }

    updateCollege(college, collegeId){
        console.log("Calling UpdateById API");
        return axios.put(COLLEGE_API_BASE_URL + '/' + collegeId, college); //First Passing Base URL, then college object
    }

    deleteCollege(collegeId){
        console.log("hi delete", collegeId);
        return axios.delete(COLLEGE_API_BASE_URL + '/' + collegeId);
    }
}

export default new CollegeService() //Exporting instance of CollegeService Class
//Default is useful when we only want to export single object, function, variable

