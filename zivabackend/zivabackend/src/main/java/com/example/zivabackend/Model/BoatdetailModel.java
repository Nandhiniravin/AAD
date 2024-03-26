package com.example.zivabackend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class BoatdetailModel {
    @Id
    @GeneratedValue(strategy =  = GenerationType.AUTO)
    private int boatid;
      private String boatname;
      private String boatdescription;
      private String boataddress;
      private String boatavail;
      private String boatimgurl;
      private long price;
      private long capacity;
}
