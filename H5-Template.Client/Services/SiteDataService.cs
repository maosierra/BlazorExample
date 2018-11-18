using H5_Template.Client.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace H5_Template.Client.Services
{
    public class SiteDataService : ISiteDataService
    {
        public string PageTitle { get; private set; } = "HOME";

        public event Action OnDataChange;

        public void SetPageTitle(string title)
        {
            PageTitle = title;
            StateChanged();
        }

        private void StateChanged() => OnDataChange?.Invoke();
    }
}
