function quickSort(arr, low, high) {
        var i = low;                
        var j = high;
        var middle = arr[ Math.round(( low + high ) / 2) ];  
        do {
            while(arr[i] < middle) {
                ++i;  
              }  
            while(arr[j] > middle) {
                --j; 
              }
            if(i <= j){           
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++; j--;
            }
        } 
        while(i < j);
        
        if(low < j){
          quickSort(arr, low, j);
        } 
        if(i < high){
          quickSort(arr, i, high);
        } 
    }
