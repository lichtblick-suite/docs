import React from 'react';

export default function FoxgloveNote(): JSX.Element {
  return (
    <div className="alert alert--warning" role="alert">
      <h4>Note on References to Foxglove</h4>
      <p>
        In some parts of the documentation and codebase, you may still encounter references to{' '}
        <strong>Foxglove</strong> or Foxglove packages. These references are remnants of Lichtblick's origins as a fork of the Foxglove project. While Lichtblick is actively working to remove dependencies on Foxglove code and replace these references, this effort is still ongoing.
      </p>
      <p>
        We appreciate your patience as we continue to refine and align the platform with Lichtblick's independent development goals. If you have any questions or encounter issues related to these references, please reach out to our support team for assistance.
      </p>
    </div>
  );
}
