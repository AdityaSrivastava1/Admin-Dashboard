#include <iostream>
#include <vector>
#include<limits.h>
#include <unordered_map>

using namespace std;

// vector<int> findUniqueElements(const vector<int>& nums) {
//   unordered_map<int,int>mp;
    
//  for(int i=0;i<nums.size() ; i++){
//       mp[nums[i]]++;
//  }
//    vector<int>ans; 
//  for( auto it = mp.begin();it != mp.end();it++){
//     if(it->second == 1 )
//     {
//         ans.push_back(it->first);
//     }
//  } 
//  return ans;  
// }

int minimum(vector<int>&nums,int index){
 int n = nums.size();

 int mini = INT_MAX ;

 if(index >= n){
    return INT_MAX;
  }

  mini = min(mini,nums[index]);

 int a =  minimum(nums,index + 1);

  return a;

}



void printdigits(int num){
  if(num == 0){
    return  ;
  }
  vector<int>ans;

  int digit = num % 10;
  num = num / 10;
   
  printdigits(num);

  ans.push_back(digit);

  for(auto i : ans){
    cout<< i <<" ";
  }

}

int storevectorintoint(vector<int>&nums,int index){

  if(index >= nums.size()){
    return 0;
  }
  
     storevectorintoint(nums,index  + 1);

    int result  = result * 10 + nums[index];

    int ans  = 0;

    while(result ){
      int num = result % 10;
      cout<<"num is : "<<num <<endl;;
       ans = ans * 10 + num;
      result  = result  / 10;

      cout<<"result is "<<result<<endl;
    }
    cout<<endl;

    return ans;

}



int main() {
    vector<int> nums = {4, 1, 2, 5}; // Example array
    // vector<int> uniqueElements = findUniqueElements(nums);
    
    // cout << "Unique elements in the array are: ";
    // for (int num : uniqueElements) {
    //     cout << num << " ";
    // }
    // cout << endl;
    int index = 0;
    //  cout<<" minimum  number is "<< minimum(nums,index) << endl;
  //  vector<int>ans1;
  // ans1 =  printdigits(4125);
  // for(auto i : ans1){
  //   cout<< i <<" ";
  // }

  // printdigits(4125);
int a =   storevectorintoint(nums,index);
cout<<"result is "<< a << endl;

    return 0;

}
