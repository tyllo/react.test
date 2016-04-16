
export default {
  documentTitle: '',

  componentDidMount() {
    if (this.documentTitle) {
      this._cachedDocumentTitle = document.title;
      document.title = this.documentTitle;
    }
  },

  componentWillUnmount() {
    if (this.documentTitle) {
      document.title = this.documentTitle;
    }
  }
};
