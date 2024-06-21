import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare const clevertap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})

export class AppComponent {
  
  signupForm: FormGroup;
  additionalInfoForm: FormGroup;
  eventinfoForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      identity: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern]]
    });

    this.additionalInfoForm = this.fb.group({
      CustomerType: ['', Validators.required],
      PreferedLanguage: ['', Validators.required]
    });
    this.eventinfoForm=this.fb.group({
      ProductName: ['', Validators.required],
      Category: ['', Validators.required],
      Price:['',Validators.required]
    })
  }
  // constructor(private fb: FormBuilder) { }
  title = 'my-angular-app';

  onLoginClicked(){
  const formData = this.signupForm.value;
  clevertap.onUserLogin.push({
  "Site": {
    "Name": formData.username,
    "Identity": formData.identity,
    "Email": formData.email,
    "Phone": formData.phoneNumber,     // Phone (with the country code)
    "Gender": "M",                     // Can be either M or F
    "DOB": new Date('2001-12-22T06:35:31'),                 // Date of Birth. Date object
 // optional fields. controls whether the user will be sent email, push etc.
    "MSG-email": false,                // Disable email notifications
    "MSG-push": true,                  // Enable push notifications
    "MSG-sms": true,                   // Enable sms notifications
    "MSG-whatsapp": true,              // Enable WhatsApp notifications
  }
 })
 this.signupForm.reset();
  }
  AdditionalInfo() {
     this.additionalInfoForm.valid 
      const additionalData = this.additionalInfoForm.value;
      clevertap.profile.push({
        "Site": {
          "Customer Type": additionalData.CustomerType,
          "Prefered Language": additionalData.PreferedLanguage
        }
      });
      console.log('Additional info submitted:', additionalData);
      this.additionalInfoForm.reset();
  }
  pushevent(){
    clevertap.event.push("Product Viewed");
  }
  EventInfoPush() {
    this.eventinfoForm.valid 
     const additionalData = this.eventinfoForm.value;
     clevertap.event.push("Product Viewed", {
      "Product name":additionalData.ProductName,
      "Category":additionalData.Category,
      "Price":additionalData.Price,
      "Date": new Date()
    });
     console.log('Additional info submitted:', additionalData);
     this.eventinfoForm.reset();
}
chargedevent(){
  clevertap.event.push("Charged", {
    "Amount": 300,
    "Payment mode": "Credit Card",
    "Charged ID": 24052013,
    "Items": [
        {
            "Category": "Books",
            "Book name": "The Millionaire next door",
            "Quantity": 1
        },
        {
            "Category": "Books",
            "Book name": "Achieving inner zen",
            "Quantity": 1
        },
        {
            "Category": "Books",
            "Book name": "Chuck it, let's do it",
            "Quantity": 5
        }
    ]
});
}
actionOne(){
  clevertap.event.push("Angular Push");
}
actionTwo(){
  clevertap.event.push("Angular Pop-up");
}
actionThree(){
  clevertap.event.push("Angular Inbox");
}
actionFour(){
  clevertap.event.push("Angular Native Display");
}

}


