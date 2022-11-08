import axiosInstance from './axiosInstance';

const issueAPI = {
  async getIssueList(queryParams = {}) {
    axiosInstance.defaults.params = queryParams;
    const res = await axiosInstance.get(`/issues`);
    return res;
  },

  async getIssueDetail(issueNumber, queryParams = {}) {
    axiosInstance.defaults.params = queryParams;
    const res = await axiosInstance.get(`/issues/${issueNumber}`);
    return res;
  },
};

export default issueAPI;
