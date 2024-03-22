import React from 'react'

function ShareBtn() {
  return (
   <>
    {/* <!-- Share Buttons --> */}
    <div className="entry-share btn-group share-buttons">
                      <a href="#" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" className="btn" target="_blank" title="Share on Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      
                      <a href="#" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" className="btn" target="_blank" title="Share on Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>

                      <a href="#" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" className="btn" title="Share on LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    {/* <!-- /Share Buttons --> */}
   </>
  )
}

export default ShareBtn