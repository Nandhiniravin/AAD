package com.example.zivabackend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zivabackend.Model.BoatdetailModel;
import com.example.zivabackend.Repository.BoatdetailRepo;

@Service
public class BoatdetailService {
     @Autowired
    public  BoatdetailRepo boatdetailRepo;
    public BoatdetailModel createboatdetail(BoatdetailModel bdinfo)
    {
        return boatdetailRepo.save(bdinfo);
    }
    
        public List<BoatdetailModel> getboatdetail ()
       {
         return boatdetailRepo.findAll();
       }
       public BoatdetailModel getboatdetailbyid(int id)
       {
        return boatdetailRepo.findById(id) .orElse(null);
       }
       public BoatdetailModel updatebd(int id, BoatdetailModel updatedUser) {
        Optional<BoatdetailModel> existingUserOptional = boatdetailRepo.findById(id);
        if (existingUserOptional.isPresent()) {
            BoatdetailModel existingUser = existingUserOptional.get();  
            existingUser.setBoatid(updatedUser.getBoatid());
            existingUser.setBoatavail(updatedUser.getBoatavail());
            existingUser.setBoatname(updatedUser.getBoatname());
            existingUser.setBoataddress(updatedUser.getBoataddress());
            existingUser.setBoatdescription(updatedUser.getBoatdescription());
            existingUser.setBoatimgurl(updatedUser.getBoatimgurl());
            existingUser.setPrice(updatedUser.getPrice());
            existingUser.setCapacity(updatedUser.getCapacity());
            return boatdetailRepo.save(existingUser);
        } else {
            return null; 
        }
    }
        public  void deleteboatdetail(int id)
        {
            boatdetailRepo.deleteById(id);
        }
    
    
}

    

    

