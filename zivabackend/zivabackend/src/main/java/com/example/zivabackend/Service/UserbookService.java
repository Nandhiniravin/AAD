package com.example.zivabackend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.zivabackend.Model.Userbook;
import com.example.zivabackend.Repository.UserbookRepo;

@Service
public class UserbookService {
    @Autowired
    public UserbookRepo userbookrepo;
    public Userbook createuserbook(Userbook bookinginfo)                                         
    {
        return userbookrepo.save(bookinginfo);
    } 
    public List<Userbook> getuserbook()
    {
        return userbookrepo.findAll();
    }
    
    public Userbook updateuserbook(int id, Userbook newbookinginfo)
    {
        Optional<Userbook> existingUserOptional = userbookrepo.findById(id);
        if (existingUserOptional.isPresent()) {
            Userbook existingUser = existingUserOptional.get();  
            existingUser.setUserid(newbookinginfo.getUserid());
            existingUser.setUsername(newbookinginfo.getUsername());
            existingUser.setBoatname(newbookinginfo.getBoatname());
            existingUser.setAddress(newbookinginfo.getAddress());
            existingUser.setNoofpersons(newbookinginfo.getNoofpersons());
            existingUser.setFromdate(newbookinginfo.getFromdate());
            existingUser.setTodate(newbookinginfo.getTodate());
           
            return userbookrepo.save(existingUser);  
        } else {
            return null;
        }
    }
       public Userbook getuserbookbyid(int id)
       {
          return userbookrepo.findById(id) .orElse(null);
       }
       public void deletebookingbyid(int id)
       {                                                  
           userbookrepo.deleteById(id);
       }
    
    
}
