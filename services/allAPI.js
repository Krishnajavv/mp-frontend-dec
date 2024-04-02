
// upload new video

import { commonAPI } from "./commonAPI";
import {SERVER_URL} from "./serverurl";

export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

//get alluploadedvideos
export const getAllUploadedVideosAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

//get a video
export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

//add video to history

export const addVideoHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// get history

export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,)
}

// delete history

export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

// delete video

export const deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

// add videos to catagory

export const addCatagoryAPI=async(catagory)=>{
    return await commonAPI("POST",`${SERVER_URL}/catagory`,catagory)
}

// get category

export const getAllCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/catagory`,"")
}

//delete category



export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/catagory/${id}`,{})
}

// update video to category

// delete history

export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/catagory/${id}`,categoryDetails)
}