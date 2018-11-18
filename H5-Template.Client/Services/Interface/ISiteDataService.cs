using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace H5_Template.Client.Services.Interface
{
    interface ISiteDataService
    {
        string PageTitle { get; }
        void SetPageTitle(string title);
        event Action OnDataChange;
    }
}
