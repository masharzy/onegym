import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h1 className="text-center">Blogs</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Difference between authorization and authentication
              </h5>
              <p className="card-text">
                অথেনটিকেশন হলো আপনি কে তা যাচাই করার প্রক্রিয়া। কাউকে, কোন কিছ
                বা কারো কোন ACT যা সঠিক বলে দাবি করা হচ্ছে প্রকৃতপক্ষে তা সত্য
                কিনা তা যাচাই করার প্রক্রিয়া হচ্ছে অথেনটিকেশন। যেমনঃ কেউ যদি
                আমার দরজায় করা নাড়ে এবং আমি যদি বলি "কে?" অপর ব্যাক্তিঃ আমি
                রাশেদ বলছি তখন আমি নিশ্চয়ই দরজা খুলে দিবো। কারন তার আইডেন্টিটি
                সঠিক। অন্যদিকে আমি যদি বলি "কে?" অপর পাশ থেকে যদি কোন আওয়াজ না
                আসে তাহলে আমি দরজা খুলবো না। কারন তার আইডেন্টিটি সঠিক না। ঠিক এই
                ব্যাপার টিই ওয়েবসাইটের ক্ষেত্রে ঘটে। আমরা যদি সঠিক ইমেইল এবং
                পাসওয়ার্ড দেই তবেই আমরা আমাদের ডাসবোর্ড এ যেতে পারি।
                <br /> <br />
                অথোরাইজেশন হলো আপনি আপনার পারমিশন অনুযায়ী যা করতে পারবেন। কাউকে
                কোন কোন কাজ করার কড়ার জন্য বা কোন রিসোর্স ব্যাবহার করতে পারার
                পারমিশন দেয়ার প্রক্রিয়া ই হচ্ছে অথোরাইজেশন। যেমনঃ আমি যদি এম্পি
                হই তাহলে আমার পাওয়ার নিশ্চয়ই অনেক। কিন্তু আমি যদি মন্ত্রি হ
                তাহলে আমার পাওয়ার নিশ্চয়ই এম্পির থেকেও বেশি। এই বেপারটি ই ঘটে
                ওয়েবসাইটের ক্ষেত্রে। অথেনটিকেশন এর পর আমি কি করতে পারবো। আমি যদি
                এডমিন হই তাহলে আমার পাওয়ার বেশি থাকবে। আর আমি যদি ইউসার হই তাহলে
                আমার পাওয়ার কম থাকবে।
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h5>
              <p className="card-text">
                Firebase একটি ব্যাকএন্ড পরিষেবা। Firebase আমাদের অ্যাপে ইউসারদের
                অথেনটিকেশনের জন্য তৈরি UI লাইব্রেরি প্রদান করে। এটি ইমেইল এবং
                পাসওয়ার্ড, ফোন নাম্বার, Google, Facebook এবং Twitter এর মতো আরো
                অনেক জনপ্রিয় আইডেন্টিটি প্রদানকারী ব্যবহার করে অথেনটিকেশন
                সাপোর্ট করে। Firebase ছাড়াও আরো অনেক জনপ্রিয় অথেনটিকেশন সিস্টেম
                আছে। যেমনঃ <br />
                1. Okta <br />
                2. Auth0 <br />
                3. OneLogin <br />
                4. JumpCloud <br />
                5. Rippling <br />
                6. SecureAuth Identity Platform <br />
                7. ForgeRock <br />
                8. WSO2 Identity Server <br />
                ......... <br />
                ইত্যাদি ইত্যাদি !!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h5>
              <p className="card-text">
                Firebase আমাদের অথেনটিকেশন ছাড়াও আরো অনেক সার্ভিস দিয়ে থাকে।
                যেমনঃ 1. Firebase Authentication <br />
                2. Firebase Cloud Messaging <br />
                3. Firebase Cloud Functions <br />
                4. Firebase Cloud Storage <br />
                5. Firebase Realtime Database <br />
                6. Firebase Hosting <br />
                7. Firebase Remote Config <br />
                8. Firebase Crash Reporting <br />
                9. Firebase Dynamic Links <br />
                10. Firebase Performance Monitoring <br />
                11. Firebase Remote Config <br />
                12. Firebase Hosting <br />
                13. Firebase Remote Config <br />
                14. Firebase Performance Monitoring <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
