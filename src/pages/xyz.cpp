#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;


 
int main()
{
	 int n, m;
    cin >> n >> m;
 
    vector<long long> balance(n, 0ll);
    for (int i = 0; i < m; ++i)
    {
        string s;
        cin >> s;
        int np, ns;
        cin >> np >> ns;
        for (int j = 0; j < np; ++j)
        {
            int id;
            long long amt;
            cin >> id >> amt;
            balance[id - 1] -= amt;
        }
 
        for (int j = 0; j < ns; ++j)
        {
            int id;
            long long amt;
            cin >> id >> amt;
            balance[id - 1] += amt;
        }
    }
 
    int j = 0;
    vector<pair<pair<int, int>, long long>> ans;
 
    for (int i = 0; i < n; ++i)
    {
        if (balance[i] > 0)
        {
            long long int curr = balance[i];
            while (curr > 0 && j < n)
            {
                if (balance[j] >= 0)
                {
                    j++;
                    continue;
                }
                long long int  mini = min(curr, abs(balance[j]));
                curr -= mini;
                balance[j] += mini;
                ans.push_back({{i + 1, j + 1}, mini});
            }
        }
    }
    // cout << ans.size() << endl;
    for (int i = 0; i < ans.size(); ++i)
    {
        cout << ans[i].first.first << " " << ans[i].first.second << " " << ans[i].second << "\n";
    }
    // ios_base::sync_with_stdio(false);
    // cin.tie(NULL);
    // Divyank();
    return 0;
}
