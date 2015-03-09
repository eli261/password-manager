/*

Copyright 2008-2015 Clipperz Srl

This file is part of Clipperz, the online password manager.
For further information about its features and functionalities please
refer to http://www.clipperz.com.

* Clipperz is free software: you can redistribute it and/or modify it
  under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or 
  (at your option) any later version.

* Clipperz is distributed in the hope that it will be useful, but 
  WITHOUT ANY WARRANTY; without even the implied warranty of 
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Affero General Public License for more details.

* You should have received a copy of the GNU Affero General Public
  License along with Clipperz. If not, see http://www.gnu.org/licenses/.

*/

Clipperz.PM.Strings.Languages['ja-JP'.toLowerCase()] = MochiKit.Base.merge(Clipperz.PM.Strings.Languages['en-us'], {
'clipperzServiceDescription':	"<h2>自分で管理しよう！</h2> <ul> <li> <h3>Clipperz は</h3> <ul> <li> <p>安全でシンプルなパスワードマネージャです</p> </li> <li> <p>シングルサインオンを提供します</p> </li> <li> <p>機密情報のデジタル格納庫です</p> </li> </ul> </li> <li> <h3>Clipperz でできること</h3> <ul> <li> <p>パスワードを保管して管理できます</p> </li> <li> <p>ユーザー名やパスワードを入力せずに登録したウェブサービスにログインできます</p> </li> <li> <p>暗証番号やクレジットカード番号などあらゆる機密情報を守ります</p> </li> <li> <p>家族や信用できる相手と機密情報を共有できます（提供予定）</p> </li> </ul> </li> <li> <h3>Clipperz のよいところ</h3> <ul> <li> <p>無料で匿名利用できます</p> </li> <li> <p>いつでもどのコンピュータからでもアクセスできます</p> </li> <li> <p>ソフトウェアのダウンロードやインストールは不要です</p> </li> <li> <p>PC や紙に機密情報を残す必要がありません</p> </li> </ul> </li> <li> <h3>Clipperz のセキュリティ</h3> <ul> <li> <p>データはブラウザで暗号化されてから Clipprez に送信されます</p> </li> <li> <p>暗号化のキーはあなただけが知っているパスフレーズです</p> </li> <li> <p>保管したデータは暗号化されていて、保管中には決して中身を見ることができません</p> </li> <li> <p>標準が確立された暗号化手順を採用しています</p> </li> <li> <p>ソースコードはいつでも参照できますが、暗号化について何も知らなくても使えます</p> </li> </ul> </li> <li><a href=\"http://www.clipperz.com\" target=\"_blank\">もっと見る</a> </li> </ul> ",
'loginFormTitle':	"Clipperz のアカウントでログイン",
'loginFormUsernameLabel':	"ユーザー名",
'loginFormPassphraseLabel':	"パスフレーズ",
'loginFormDontHaveAnAccountLabel':	"アカウントを持っていない?",
'loginFormCreateOneLabel':	"新規作成",
'loginFormForgotYourCredentialsLabel':	"パスフレーズを忘れた?",
'loginFormAarghThatsBadLabel':	"それは困った！",
'loginFormAfraidOfMaliciousScriptsLabel':	"偽サイトかも？",
'loginFormVerifyTheCodeLabel':	"確認する",
'loginFormButtonLabel':	"ログイン",
'loginFormOneTimePasswordCheckboxLabel':	"ワンタイムパスフレーズ使用",
'loginFormOneTimePasswordCheckboxDescription':	"",
'loginPanelSwithLanguageDescription':	"<h5>言語設定の変更</h5> ",
'browserCompatibilityDescription':	"<p>Clipperz は Firefox に最適化されています。 しかし Clipperz は Opera や Safari そしてインターネットエクスプローラでも十分動作します。</p> ",
'OTPloginMessagePanelInitialTitle':	"ワンタイムパスフレーズでログイン中",
'OTPloginMessagePanelInitialText':	"OTP 情報送信中 ...",
'OTPloginMessagePanelLoadingTitle':	"ワンタイムパスフレーズでログイン中",
'OTPloginMessagePanelLoadingText':	"認証情報を取得中 ...",
'OTPloginMessagePanelProcessingTitle':	"ワンタイムパスフレーズでログイン中",
'OTPloginMessagePanelProcessingText':	"認証情報を復号中 ...",
'loginMessagePanelInitialTitle':	"ログイン中 ...",
'loginMessagePanelInitialText':	"---",
'loginMessagePanelInitialButtonLabel':	"キャンセル",
'loginMessagePanelConnectedTitle':	"接続完了",
'loginMessagePanelConnectedText':	"完了",
'loginMessagePanelFailureTitle':	"エラー",
'loginMessagePanelFailureText':	"ログインに失敗しました",
'loginMessagePanelFailureButtonLabel':	"閉じる",
'connectionLoginSendingCredentialsMessageTitle':	"認証確認中",
'connectionLoginSendingCredentialsMessageText':	"認証送信中",
'connectionLoginCredentialsVerificationMessageTitle':	"認証確認中",
'connectionLoginCredentialsVerificationMessageText':	"SRP 認証中",
'connectionLoginDoneMessageTitle':	"認証確認中",
'connectionLoginDoneMessageText':	"接続完了",
'userLoginPanelUpgradingUserCredentialsMessageTitle':	"認証確認中",
'userLoginPanelUpgradingUserCredentialsMessageText':	"認証更新中",
'userLoginPanelConnectedMessageTitle':	"認証完了",
'userLoginPanelConnectedMessageText':	"ログイン完了",
'userLoginPanelTryingAnOlderConnectionSchemaMessageTitle':	"認証確認中",
'userLoginPanelTryingAnOlderConnectionSchemaMessageText':	"認証復元中",
'userLoginPanelLoadingUserDataMessageTitle':	"認証完了",
'userLoginPanelLoadingUserDataMessageText':	"暗号化データを受信中",
'userLoginPanelDecryptingUserDataMessageTitle':	"認証完了",
'userLoginPanelDecryptingUserDataMessageText':	"復号中",
'userLoginPanelDecryptingUserStatisticsMessageTitle':	"認証完了",
'userLoginPanelDecryptingUserStatisticsMessageText':	"復号中",
'splashAlertTitle':	"Clipperz へようこそ",
'splashAlertText':	"<p>セキュリティアドバイス</p> <ul> <li> <p>Clipperz に保管したデータはパスフレーズによって保護されます。 パスフレーズを知らない人はデータにアクセスできません。</p> </li> <li> <p>Clipperz に重要なデータを保管するためにパスフレーズを類推されにくいものにしてください。 長いほど安全です。</p> </li> <li> <p>パスフレーズを忘れてしまったら Clipperz ではデータを復元できません。</p> </li> </ul> <p>さらに詳しくは Clipperz のサイトをごらんください。</p> ",
'splashAlertCloseButtonLabel':	"OK",
'registrationFormTitle':	"新規アカウント作成",
'registrationFormUsernameLabel':	"ユーザー名",
'registrationFormPassphraseLabel':	"パスフレーズ",
'registrationFormRetypePassphraseLabel':	"パスフレーズをもう一度",
'registrationFormSafetyCheckLabel':	"パスフレーズを忘れたら復活できないことを了承します。",
'registrationFormTermsOfServiceCheckLabel':	"利用許諾に同意します 。",
'registrationFormDoYouAlreadyHaveAnAccountLabel':	"アカウントを持っている？",
'registrationFormSimplyLoginLabel':	"すぐにログイン",
'registrationFormButtonLabel':	"登録",
'registrationFormWarningMessageNotMatchingPassphrases':	"パスフレーズの入力に誤りがあります。 再入力してください。",
'registrationFormWarningMessageSafetyCheckNotSelected':	"説明を読んで下のボックスを全てチェックしてください。",
'registrationFormWarningMessageTermsOfServiceCheckNotSelected':	"利用許諾に同意してください。",
'registrationMessagePanelInitialTitle':	"アカウント作成中 ...",
'registrationMessagePanelInitialText':	"---",
'registrationMessagePanelInitialButtonLabel':	"キャンセル",
'registrationMessagePanelRegistrationDoneTitle':	"登録",
'registrationMessagePanelRegistrationDoneText':	"完了",
'registrationMessagePanelFailureTitle':	"登録失敗",
'registrationMessagePanelFailureButtonLabel':	"閉じる",
'connectionRegistrationSendingRequestMessageText':	"認証確認中",
'connectionRegistrationSendingCredentialsMessageText':	"認証送信中",
'registrationSplashPanelTitle':	"セキュリティアドバイス",
'registrationSplashPanelDescription':	"<p>Clipperz の認証情報です。 大切に保管してください。 ユーザー名とパスフレーズは二度と表示されません。</p> ",
'registrationSplashPanelUsernameLabel':	"ユーザー名",
'registrationSplashPanelPassphraseLabel':	"パスフレーズ",
'registrationSplashPanelShowPassphraseButtonLabel':	"パスフレーズを表示",
'donateHeaderLinkLabel':	"寄付",
'creditsHeaderLinkLabel':	"クレジット",
'feedbackHeaderLinkLabel':	"フィードバック",
'helpHeaderLinkLabel':	"ヘルプ",
'forumHeaderLinkLabel':	"フォーラム",
'recordMenuLabel':	"カード",
'accountMenuLabel':	"アカウント",
'dataMenuLabel':	"データ",
'contactsMenuLabel':	"コンタクト",
'toolsMenuLabel':	"ツール",
'logoutMenuLabel':	"ログアウト",
'lockMenuLabel':	"ロック",
'lockTitle':	"アカウントはロックされました",
'lockDescription':	"<p>ロックを解除するにはパスフレーズを入力してください。</p> ",
'unlockButtonLabel':	"解除",
'changePasswordTabLabel':	"パスフレーズの変更",
'changePasswordTabTitle':	"パスフレーズの変更",
'changePasswordFormUsernameLabel':	"ユーザー名",
'changePasswordFormOldPassphraseLabel':	"今のパスフレーズ",
'changePasswordFormNewPassphraseLabel':	"新しいパスフレーズ",
'changePasswordFormRetypePassphraseLabel':	"パスフレーズをもう一度",
'changePasswordFormSafetyCheckboxLabel':	"パスフレーズを忘れたら復活できないことを了承します。",
'changePasswordFormSubmitLabel':	"変更",
'changePasswordFormWrongUsernameWarning':	"ユーザー名が違います",
'changePasswordFormWrongPassphraseWarning':	"パスフレーズが違います",
'changePasswordFormWrongRetypePassphraseWarning':	"パスフレーズの入力に誤りがあります。 再入力してください。",
'changePasswordFormSafetyCheckWarning':	"説明を読んでボックスをチェックしてください。",
'changePasswordFormProgressDialogTitle':	"認証情報を変更中",
'changePasswordFormProgressDialogEmptyText':	"---",
'changePasswordFormProgressDialogConnectedMessageTitle':	"接続完了",
'changePasswordFormProgressDialogConnectedMessageText':	"完了",
'changePasswordFormProgressDialogErrorMessageTitle':	"エラー",
'changePasswordFormProgressDialogErrorMessageText':	"変更に失敗しました",
'changeCredentialsPanelEncryptingDataMessageTitle':	"パスフレーズを変更中",
'changeCredentialsPanelEncryptingDataMessageText':	"カードヘッダ暗号化",
'changeCredentialsPanelCreatingNewCredentialsMessageTitle':	"パスフレーズを変更中",
'changeCredentialsPanelCreatingNewCredentialsMessageText':	"認証情報を送信中",
'changeCredentialsPanelSendingNewCredentialsToTheServerMessageTitle':	"パスフレーズを変更中",
'changeCredentialsPanelSendingNewCredentialsToTheServerMessageText':	"暗号化データを送信中",
'changeCredentialsPanelDoneMessageTitle':	"パスフレーズを変更中",
'changeCredentialsPanelDoneMessageText':	"完了",
'manageOTPTabLabel':	"ワンタイムパスフレーズ管理",
'manageOTPTabTitle':	"ワンタイムパスフレーズ管理",
'manageOTPTabDescription':	"<p>ワンタイムパスフレーズは通常のパスフレームと同様に機能しますが、一回限りの使い捨てパスフレーズです。</p> <p>同じパスフレーズで再度ログインすることはできません。</p> <p>不正アクセス防止のためにログインに成功したら直ちにワンタイムパスフレーズは削除されます</p> <p>ワンタイムパスフレーズはキーロガーやスパイウェアからパスフレーズを守るすばらしい機能です</p> <p><b>インターネットカフェや図書館などから Clipperz にアクセする場合にはワンタイムパスフレーズを利用することを強くお薦めします。</b> </p> ",
'oneTimePasswordReadOnlyMessage':	"<h6>ごめんなさい</h6> <p>ローカルコピー使用中はワンタイムパスフレーズを利用できません。</p> ",
'oneTimePasswordLoadingMessage':	"<h6>ロード中</h6> <p>お待ちください ...</p> ",
'oneTimePasswordNoPasswordAvailable':	"<h6>有効なワンタイムパスフレーズがありません</h6> <p>「新規」ボタンをクリックしてワンタイムパスフレーズを作成してください。</p> ",
'createNewOTPButtonLabel':	"新規",
'deleteOTPButtonLabel':	"削除",
'printOTPButtonLabel':	"印刷",
'disabledOneTimePassword_warning':	"無効",
'oneTimePasswordSelectionLink_selectLabel':	"選択:",
'oneTimePasswordSelectionLink_all':	"すべて",
'oneTimePasswordSelectionLink_none':	"解除",
'oneTimePasswordSelectionLink_used':	"使用済",
'oneTimePasswordSelectionLink_unused':	"未使用",
'saveOTP_encryptUserDataTitle':	"ワンタイムパスフレーズを保存中",
'saveOTP_encryptUserDataText':	"OTP 認証譲歩を作成中 ...",
'saveOTP_encryptOTPDataTitle':	"ワンタイムパスフレーズを保存中",
'saveOTP_encryptOTPDataText':	"暗号化データを作成中 ...",
'saveOTP_sendingDataTitle':	"ワンタイムパスフレーズを保存中",
'saveOTP_sendingDataText':	"暗号化データを送信中 ...",
'saveOTP_updatingInterfaceTitle':	"ワンタイムパスフレーズを保存中",
'saveOTP_updatingInterfaceText':	"インターフェイスを更新中 ...",
'accountPreferencesLabel':	"設定",
'accountPreferencesTabTitle':	"設定",
'accountPreferencesLanguageTitle':	"言語設定",
'accountPreferencesLanguageDescription':	"<p>リストから使用する言語を選択してください。</p> ",
'showDonationReminderPanelTitle':	"ドネーションリマインダ",
'showDonationReminderPanelDescription':	"<p>ドネーションリマインダを表示</p> ",
'saveUserPreferencesFormSubmitLabel':	"保存",
'cancelUserPreferencesFormSubmitLabel':	"キャンセル",
'accountPreferencesSavingPanelTitle_Step1':	"保存中",
'accountPreferencesSavingPanelText_Step1':	"暗号化中",
'accountPreferencesSavingPanelTitle_Step2':	"保存中",
'accountPreferencesSavingPanelText_Step2':	"送信中",
'accountLoginHistoryLabel':	"ログイン履歴",
'loginHistoryTabTitle':	"ログイン履歴",
'loginHistoryReadOnlyMessage':	"<h6>ごめんなさい</h6> <p>ローカルコピー使用中はログイン履歴を利用できません。</p> ",
'loginHistoryLoadingMessage':	"<h6>ロード中</h6> <p>お待ちください ...</p> ",
'loginHistoryLoadedMessage':	"<h6>最近 10 回のログイン</h6> <p> </p> ",
'loginHistoryIPLabel':	"IP",
'loginHistoryTimeLabel':	"日付",
'loginHistoryCurrentSessionText':	"現在のログイン",
'loginHistoryReloadButtonLabel':	"ログイン履歴を更新",
'deleteAccountTabLabel':	"アカウント削除",
'deleteAccountTabTitle':	"アカウント削除",
'deleteAccountFormUsernameLabel':	"ユーザー名",
'deleteAccountFormPassphraseLabel':	"パスフレーズ",
'deleteAccountFormSafetyCheckboxLabel':	"全てのデータが消去されて復元不可能になることを了承します。",
'deleteAccountFormSubmitLabel':	"アカウント削除",
'deleteAccountFormWrongUsernameWarning':	"ユーザー名が違います",
'deleteAccountFormWrongPassphraseWarning':	"パスフレーズが違います",
'deleteAccountFormSafetyCheckWarning':	"説明を読んでボックスをチェックしてください。",
'accountPanelDeletingAccountPanelConfirmationTitle':	"確認",
'accountPanelDeleteAccountPanelConfirmationText':	"本当にアカウントを削除しますか？",
'accountPanelDeleteAccountPanelConfirmButtonLabel':	"はい",
'accountPanelDeleteAccountPanelDenyButtonLabel':	"いいえ",
'accountPanelDeletingAccountPanelProgressTitle':	"アカウント情報削除中",
'accountPanelDeletingAccountPanelProgressText':	"しばらくお待ちください",
'offlineCopyTabLabel':	"ローカルコピー",
'offlineCopyTabTitle':	"ローカルコピー",
'offlineCopyTabDescription':	"<p>ダウンロードのリンクをクリクするとインターネットに接続していないときでも利用できる読み取り専用のローカル版をダウンロードできます。</p> <p>ローカル版はオンライン版と同じ暗号化処理がされているため、編集可能なオンライン版と同じ安全性があります。</p> <ol> <li> <p>下の「ダウンロード」をクリックします。</p> </li> <li> <p>ブラウザーが &quot;Clipperz_YYYYMMDD.html&quot; をダウンロードするか確認します。 ファイルをハードディスクに保存してください。</p> </li> <li> <p>ローカルコピーをダブルクリックして起動してください。</p> </li> <li> <p>オンライン版と同じユーザー名とパスフレーズを入力してください。</p> </li> </ol> ",
'offlineCopyDownloadLinkLabel':	"ダウンロード",
'offlineCopyDownloadWarning':	"<h4><a href=\"#\" id=\"offlineCopyDownloadWarningLink\">ローカルコピーを更新してください</a> </h4> <p>ローカルコピーを作成後に新しいカードを追加または編集しています。 最新の情報を保つためローカルコピーを更新してください。</p> ",
'offlineCopyDownloadOk':	"",
'sharingTabLabel':	"共有",
'sharingTabTitle':	"共有",
'sharingTabDescription':	"<p>暗証番号などを他人に教える必要があることは日常生活で往々にして発生します。</p> <p>同僚に留守番電話のメッセージを代わりに聞いてもらうために暗証番号を教えたり、秘書に代わりに銀行に行ってもらうために暗証番号を教えたりということはよくあることです。</p> <p>Clipperz では機密情報を安全に、そして簡単に共有できます。</p> <p> </p> <p><b>近日登場 ...</b> </p> ",
'importTabLabel':	"インポート",
'importTabTitle':	"インポート",
'importTabDescription':	"<p>コンピュータから Clipperz にデータを一括インポートできます。</p> ",
'printingTabLabel':	"エクスポート",
'printingTabTitle':	"エクスポート",
'printingTabDescription':	"<h5>印刷</h5> <p>「印刷用データ」のリンクをクリックするとウィンドウが開いて全てのデータが印刷可能な状態で表示されます。</p> <p>バックアップが目的なら、誰でも見ることができる印刷版よりは安全なローカルコピーをお薦めします。</p> ",
'printingLinkLabel':	"印刷用データ",
'exportTabDescription':	"<h5>JSON エクスポート</h5> <p>JSON はすべてのデータをエクスポートできます。 ダイレクトログインを含むすべての情報が保存されます。</p> <p>このフォーマットはすべてのデータを別の Clipperz アカウントに移動するときに便利です。 トラブルが発生したときにデータを復旧するのにも役立ちます。</p> <p>「JSON 出力｣のリンクをクリックするとエクスポートが開始されます。</p> ",
'exportLinkLabel':	"JSON 出力",
'exportDataInProgressDescription':	"<h4>出力中。しばらくお待ちください ...</h4> ",
'exportDataDescription':	"<h4>利用法</h4> <p>下のテキストを任意のエディターにコピーして保存します。 （例： 「clipperz_export_20071217.json」）</p> ",
'contactsTabLabel':	"コンタクト",
'contactsTabTitle':	"コンタクト",
'passwordGeneratorTabLabel':	"パスワードジェネレータ",
'bookmarkletTabLabel':	"ブックマークレット",
'compactTabLabel':	"コンパクト版",
'httpAuthTabLabel':	"HTTP 認証",
'passwordGeneratorTabTitle':	"パスワードジェネレータ",
'bookmarkletTabTitle':	"ブックマークレット",
'compactTabTitle':	"コンパクト版",
'httpAuthTabTitle':	"HTTP 認証",
'paswordGeneratorTabDescription':	"<p> </p> ",
'passwordGeneratorTabButtonLabel':	"パスワード生成",
'bookmarkletTabLabel':	"ブックマークレット",
'bookmarkletTabTitle':	"ブックマークレット",
'bookmarkletTabDescription':	"<p>ブックマークレットはブラウザのブックマークに登録して使う小さなプログラムです。 通常のウェブページのブックマークと同じようにブラウザに登録できます。</p> <p>Clipperz のブックマークレットを使えば簡単に新規カードを追加したり、既存のカードにダイレクトログインを追加したりできます。</p> <p><b>Clipperz のブックマークレットにはユーザー名やパスフレーズなどの個人情報は含まれていません。ブックマークレットは全ユーザー共通のものです。</b> </p> <h3>ブックマークレットの登録方法</h3> <h>Firefox, Camino, Opera, Safari <ol> <li> <p>ブックマークバー（パーソナルバー）が表示されていることを確認します。 （「表示」メニュー（「表示＞ツールバー」サブメニューの場合もあり）から変更できます。）</p> </li> <li> <p>下の「Clipperz に追加」をブックマークバー（パーソナルバー）にドラッグします。</p> </li> </ol> <h5>インターネットエクスプローラー</h5> <ol> <li> <p>アドレスバーが表示されていることを確認します。 （「表示＞ツールバー＞アドレスバー」メニューから変更できます。）</p> </li> <li> <p>下の「Clipperz に追加」を右クリックします。</p> </li> <li> <p>コンテキストメニューから「お気に入りに追加」を選択します。</p> </li> <li> <p>セキュリティ警告が表示されますので「はい」をクリックします。</p> </li> <li> <p>保存先の「リンク」フォルダーを開き「OK」をクリックします。</p> </li> </ol> ",
'bookmarkletTabBookmarkletTitle':	"Clipperz に追加",
'bookmarkletTabInstructions':	"<h3>ダイレクトログイン用の新規カードの作成方法</h3> <ol> <li> <p>保存したいサービスのログインページを開きます。 （パスワードなどを入力する画面があるところです）</p> </li> <li> <p>ブックマークレットをクリックします。 画面上にウィンドウがポップアップします。</p> </li> <li> <p>ポップアップしたウィンドウに表示された登録用コードをコピーします。 （ctrl-C)</p> </li> <li> <p>Clipperz にログインして 「新規カード追加」のボタンをクリックします。</p> </li> <li> <p>「ダイレクトログイン」のテンプレートを選んでコード入力用のスペースに先ほどコピーしたコードを貼り付けます。 (ctrl-V)</p> </li> <li> <p>「作成」ボタンをクリックして、内容を確認して「保存」ボタンをクリックします。</p> </li> </ol> <h3>既存カードへのダイレクトログインの追加方法</h3> <ol> <li> <p>上記と同じです。</p> </li> <li> <p>上記と同じです。</p> </li> <li> <p>上記と同じです。</p> </li> <li> <p>Clipperz にログインして変更したいカードを選択後「編集」ボタンをクリックします。</p> </li> <li> <p>ダイレクトログインコード用のスペースに先ほどコピーしたコードを貼り付けます。 (ctrl-V)</p> </li> <li> <p>「ダイレクトログイン追加」ボタンをクリックして、内容を確認して「保存」ボタンをクリックします。</p> </li> </ol> <p> </p> <p>ブックマークレットに関する詳しい情報はこちら。</p> ",
'compactTabDescription':	"<p>Clipprez Compact は Firefox のサイドバーで利用するようデザインされた Clipperz の特別版です。</p> <p>ダイレクトログインを常時アクセス可能にします。 さらに詳しく </p> <h3>Clipperz Compact の利用法</h3> <ol> <li> <p>Firefox を入手します。 サイドバーは Firefox だけで利用できるため、 Clipperz Compact を利用するには Firefox が必須です。</p> </li> <li> <p>下の「Clipperz Compact」 URL を Firefox のブックマークに登録します。ブックマークバーにドラッグするのが簡単です。</p> <div id=\"compactLinkBox\"><a href=\"https://www.clipperz.com/beta/index.html?compact\" target=\"_search\">Clipperz Compact</a> </div> </li> <li> <p>ブックマークを右クリックして「情報を見る｣を選択後、「このブックマークをサイドバーに読み込む｣にチェックを入れます。</p> </li> </ol> <h5>追加情報：Clipperz Compact は Opera のパネルでも操作します。</h5> ",
'httpAuthTabDescription':	"<p>HTTP 認証は HTML の基本機能を使ってブラウザからユーザー名とパスワードでログインする方式です。</p> <p>すでに主流ではありませんが、またプライベートなサイトなどで使われています。 HTTP 認証が必要なサイトにアクセスしようとすると、ブラウザがポップアップウィンドウを開いてユーザー名とパスワードの入力を要求してきます。</p> <p>残念ながら、 Clipperz のブックマークレットは HTTP 認証には対応していません。 しかし、ダイレクトログインを設定する方法はあります。</p> <h3>HTTP 認証サイトでのダイレクトログイン設定方法</h3> <ol> <li> <p>サイトの URL とユーザー名、パスワードを新規カードに登録します。</p> </li> <li> <p>下記の設定をコピーして、カード編集画面の「ダイレクトログイン設定」のセクションに貼り付けます。</p> </li> <li> <p>「新規ダイレクトログイン追加｣ボタンをクリックして、 URL とユーザー名、パスワードを入力して保存します。</p> </li> </ol> <h5><a href=\"http://support.microsoft.com/kb/834489\" target=\"_blank\">警告：インターネットエクスプローラは HTTP 認証に対応していません。</a> </h5> ",
'mainPanelDirectLoginBlockLabel':	"ダイレクトログイン",
'directLinkReferenceShowButtonLabel':	"表示",
'mainPanelDirectLoginBlockDescription':	"<p>ダイレクトログインを設定してユーザー名やパスワードを入力することなくログインできるようにしましょう。</p> <p>ダイレクトログインでさらにセキュリティを強化するために：</p> <ul> <li> <p>より複雑なパスワードを設定しましょう</p> </li> <li> <p>推測されやすい同じパスワードを複数のサイトで使わないようにしましょう。</p> </li> </ul> <p>ブックマークレットを使うと簡単に設定できます。</p><a href=\"http://www.clipperz.com/support/user_guide/direct_logins\" target=\"_blank\">ダイレクトログインに関する詳しい情報</a> ",
'mainPanelRecordsBlockLabel':	"カード",
'mainPanelAddRecordButtonLabel':	"新規カード追加",
'mainPanelRemoveRecordButtonLabel':	"カード削除",
'mainPanelRecordFilterBlockAllLabel':	"すべて",
'mainPanelRecordFilterBlockTagsLabel':	"タグ",
'mainPanelRecordFilterBlockSearchLabel':	"検索",
'recordDetailNoRecordAtAllTitle':	"Clipperz へようこそ",
'recordDetailNoRecordAtAllDescription':	"<h5>まず最初にカードを追加しましょう。</h5> <p>カードはパスワードやその他の重要な情報を保管するためのシンプルでフレキシブルなフォームです。</p> <p>カードにはウェブサイトのログインパスワード、自転車の鍵の番号、クレジットカードの番号など何でも記入できます。</p> <h5>ブックマークレットを活用しましょう。</h5> <p>まずは簡単にカードを追加できるブックマークレットをインストールしましょう。</p> <p>ブックマークレットのタブをクリックしてインストール方法と利用方法を確認しましょう。</p> <p> </p> <p>ブックマークレットをインストールしたら Clipperz を活用しましょう。</p> <p> </p><a href=\"http://www.clipperz.com/support/user_guide/managing_cards\" target=\"_blank\">カードに関する詳しい情報</a> ",
'newRecordWizardTitleBox':	"<h5>テンプレート選択</h5> <p>カードはシンプルでパスワードや重要な情報を何でも保存できる柔軟性があります。</p> <p>まずはテンプレートを選んでください。  カードはいつでも自由に変更できます。</p> ",
'newRecordWizardBookmarkletConfigurationTitle':	"ダイレクトログイン",
'newRecordWizardBookmarkletConfigurationDescription':	"<p>ブックマークレットが生成したコードを下に貼り付けてください。</p> <p>ダイレクトログイン情報を含む新しいカードが作成されます。</p> ",
'newRecordWizardCreateButtonLabel':	"作成",
'newRecordWizardCancelButtonLabel':	"キャンセル",
'donateSplashPanelTitle':	"Clipperz のために今すぐ寄付しよう",
'donateSplashPanelDescription':	"<p>寄付する理由:</p> <ul> <li> <p>新機能追加をサポートします</p> </li> <li> <p>Clipperz を無料に保ちます</p> </li> <li> <p>開発陣の仕事に感謝します</p> </li> </ul> <p>詳しくは寄付のページをごらんください .</p> <p><b>寄付しますか？</b> </p> ",
'donateCloseButtonLabel':	"あとでする",
'donateDonateButtonLabel':	"はい",
'recordTemplates':	{
	'WebAccount':	{
		'title':	"ウェブパスワード",
		'description':	"<p>ログイン情報用のシンプルなカードです。</p> ",
		'fields':	{
			'URL':	"ウェブアドレス",
			'TXT':	"ユーザー名またはメールアドレス",
			'PWD':	"パスワード"
		}
	},
	'BankAccount':	{
		'title':	"銀行口座",
		'description':	"<p>口座番号とオンラインバンキング情報用のカードです。</p> ",
		'fields':	{
			'TXT':	"銀行",
			'TXT':	"口座番号",
			'URL':	"銀行サイト",
			'TXT':	"オンラインバンキング ID",
			'PWD':	"オンラインバンキングパスワード"
		}
	},
	'CreditCard':	{
		'title':	"クレジットカード",
		'description':	"<p>クレジットカードに関するあらゆる情報を保管できます。</p> ",
		'fields':	{
			'TXT':	"種類（Visa 、 AMEX など）",
			'TXT':	"番号",
			'TXT':	"所有者名",
			'TXT':	"有効期限",
			'TXT':	"CVV2 番号",
			'PWD':	"暗証番号",
			'URL':	"カード会社サイト",
			'TXT':	"ユーザー名",
			'PWD':	"パスワード"
		}
	},
	'AddressBookEntry':	{
		'title':	"アドレス帳",
		'description':	"<p>Clipperz はプライベートなアドレス帳としても機能します。 このテンプレートを利用して簡単に新しい住所を追加できます。</p> ",
		'fields':	{
			'TXT':	"名前",
			'TXT':	"メールアドレス",
			'TXT':	"電話番号",
			'TXT':	"携帯電話",
			'ADDR':	"住所"
		}
	},
	'Custom':	{
		'title':	"カスタムカード",
		'description':	"<p>カスタムカードを使えばどんな情報でも保管できます。</p> ",
		'fields':	{
			'TXT':	"ラベル 1",
			'TXT':	"ラベル 2",
			'TXT':	"ラベル 3"
		}
	}
},
'recordFieldTypologies':	{
	'TXT':	{
		'description':	"テキスト入力欄",
		'shortDescription':	"テキスト"
	},
	'PWD':	{
		'description':	"通常は非表示になるテキスト入力欄",
		'shortDescription':	"パスワード"
	},
	'URL':	{
		'description':	"表示モードではクリックできる URL 入力欄",
		'shortDescription':	"ウェブアドレス"
	},
	'DATE':	{
		'description':	"日付入力欄",
		'shortDescription':	"日付"
	},
	'ADDR':	{
		'description':	"Google マップ用の URL に似た文字列",
		'shortDescription':	"住所"
	},
	'CHECK':	{
		'description':	"チェックボックスの詳細",
		'shortDescription':	"チェックボックス"
	},
	'RADIO':	{
		'description':	"ラジオボタンの詳細",
		'shortDescription':	"ラジオボタン"
	},
	'SELECT':	{
		'description':	"セレクトリストの詳細",
		'shortDescription':	"セレクトリスト"
	}
},
'newRecordPanelGeneralExceptionTitle':	"エラー",
'newRecordPanelGeneralExceptionMessage':	"コードが不正です。 ブックマークレットを確認してもう一度やり直してください。",
'newRecordPanelWrongBookmarkletVersionExceptionTitle':	"エラー",
'newRecordPanelWrongBookmarkletVersionExceptionMessage':	"古いバージョンのブックマークレットで生成されたコードです。 ブックマークレットを更新してやり直してください。",
'newRecordPanelExceptionPanelCloseButtonLabel':	"キャンセル",
'mainPanelDeletingRecordPanelConfirmationTitle':	"カード削除中",
'mainPanelDeleteRecordPanelConfirmationText':	"本当に削除しますか？",
'mainPanelDeleteRecordPanelConfirmButtonLabel':	"はい",
'mainPanelDeleteRecordPanelDenyButtonLabel':	"いいえ",
'mainPanelDeletingRecordPanelInitialTitle':	"カード削除中",
'mainPanelDeletingRecordPanelInitialText':	"---",
'mainPanelDeletingRecordPanelCompletedText':	"完了",
'deleteRecordPanelCollectRecordDataMessageTitle':	"カード削除",
'deleteRecordPanelCollectRecordDataMessageText':	"カードリスト更新中",
'deleteRecordPanelEncryptUserDataMessageTitle':	"カード削除",
'deleteRecordPanelEncryptUserDataMessageText':	"カードヘッダ暗号化",
'deleteRecordPanelSendingDataToTheServerMessageTitle':	"カード削除",
'deleteRecordPanelSendingDataToTheServerMessageText':	"送信中",
'deleteRecordPanelUpdatingTheInterfaceMessageTitle':	"カード削除",
'deleteRecordPanelUpdatingTheInterfaceMessageText':	"更新中",
'recordDetailNoRecordSelectedTitle':	"カードが選択されていません",
'recordDetailNoRecordSelectedDescription':	"<p>左のリストからカードを選択してください。</p> ",
'recordDetailLoadingRecordMessage':	"データ受信中",
'recordDetailDecryptingRecordMessage':	"データ復元中",
'recordDetailLoadingRecordVersionMessage':	"最新情報を受信中",
'recordDetailDecryptingRecordVersionMessage':	"最新情報を復元中",
'recordDetailLoadingErrorMessageTitle':	"受信エラー",
'recordDetailNotesLabel':	"ノート",
'recordDetailLabelFieldColumnLabel':	"ラベル",
'recordDetailDataFieldColumnLabel':	"データ",
'recordDetailTypeFieldColumnLabel':	"タイプ",
'recordDetailSavingChangesMessagePanelInitialTitle':	"保存中",
'recordDetailSavingChangesMessagePanelInitialText':	"---",
'recordDetailRemoveFieldButtonLabel':	"-",
'recordDetailAddFieldButtonLabel':	"フィールド追加",
'recordDetailPasswordFieldHelpLabel':	"パスワードをコピーするには星マークをクリックして ctrl-C をタイプします",
'recordDetailPasswordFieldScrambleLabel':	"隠す",
'recordDetailPasswordFieldUnscrambleLabel':	"可視化",
'recordDetailDirectLoginBlockTitle':	"ダイレクトログイン",
'recordDetailNewDirectLoginDescription':	"<p>ダイレクトログイン設定</p> ",
'recordDetailDirectLoginBlockNoDirectLoginConfiguredDescription':	"<p>オンラインサービスのログイン情報を含んでいますか？</p> <p>ブックマークレットを使ってダイレクトログインを設定しましょう！</p> ",
'recordDetailDeleteDirectLoginButtonLabel':	"-",
'recordDetailAddNewDirectLoginButtonLabel':	"新規ダイレクトログイン追加",
'recordDetailEditButtonLabel':	"編集",
'recordDetailSaveButtonLabel':	"保存",
'recordDetailCancelButtonLabel':	"キャンセル",
'newRecordTitleLabel':	"_新規カード_",
'newDirectLoginLabelSuffix':	"",
'recordSaveChangesPanelCollectRecordInfoMessageTitle':	"カード保存",
'recordSaveChangesPanelCollectRecordInfoMessageText':	"更新中",
'recordSaveChangesPanelEncryptUserDataMessageTitle':	"カード保存",
'recordSaveChangesPanelEncryptUserDataMessageText':	"カードヘッダ暗号化",
'recordSaveChangesPanelEncryptRecordDataMessageTitle':	"カード保存",
'recordSaveChangesPanelEncryptRecordDataMessageText':	"カードデータ暗号化",
'recordSaveChangesPanelEncryptRecordVersionDataMessageTitle':	"カード保存",
'recordSaveChangesPanelEncryptRecordVersionDataMessageText':	"バージョンデータ暗号化",
'recordSaveChangesPanelSendingDataToTheServerMessageTitle':	"カード保存",
'recordSaveChangesPanelSendingDataToTheServerMessageText':	"カード送信中",
'recordSaveChangesPanelUpdatingTheInterfaceMessageTitle':	"カード保存",
'recordSaveChangesPanelUpdatingTheInterfaceMessageText':	"更新中",
'passwordGeneratorPanelTitle':	"パスワードジェネレータ",
'passwordGeneratorPanelOkLabel':	"OK",
'passwordGeneratorPanelCancelLabel':	"キャンセル",
'passwordGeneratorLowercaseLabel':	"abc",
'passwordGeneratorUppercaseLabel':	"ABC",
'passwordGeneratorNumberLabel':	"012",
'passwordGeneratorSymbolLabel':	"@#$",
'passwordGeneratorLengthLabel':	"文字数:",
//'DWRUtilLoadingMessage':	"ロード中 ...",
'comingSoon':	"近日登場 ...",
'panelCollectingEntryopyMessageText':	"整頓中",
'directLoginConfigurationCheckBoxFieldSelectedValue':	"はい",
'directLoginConfigurationCheckBoxFieldNotSelectedValue':	"いいえ",
'importFormats':	{
	'CSV':	{
		'label':	"CSV",
		'description':	"<p>広く普及しているフォーマットです。 いくつかのパスワードマネージャは CSV でのエクスポートに対応しています。</p>"
	},
	'Excel':	{
		'label':	"エクセル",
		'description':	"<p>マイクロソフトの有名な表計算ソフトです。 エクセルのファイルでパスワードを保存することは広く行われていますがおすすめできません。</p>"
	},
	'KeePass':	{
		'label':	"KeePass",
		'description':	"<p>パスワードマネージャ KeePass で生成されるテキストファイルです。</p>"
	},
	'PasswordPlus':	{
		'label':	"Password Plus",
		'description':	"<p>パスワードマネージャ Password Plus で生成される CSV ファイルです。</p>"
	},
	'Roboform':	{
		'label':	"RoboForm",
		'description':	"<p>パスワードマネージャ Roboform で印刷用に表示される HTML ファイルです。</p>"
	},
	'ClipperzExport':	{
		'label':	"JSON",
		'description':	"<p>Clipperz で生成されるフォーマットです。 ダイレクトログインを含むすべての情報が含まれます。</p>"
	}
},
'Clipperz_ImportWizard_Title':	"JSON インポート",
'importOptions_clipperz_description':	"<p>Clipperz で生成された JSON ファイルをテキストエディタで開きます。 次に下のテキストエリアにファイルの内容をコピーします。</p> ",
'CSV_ImportWizard_Title':	"CSV インポート",
'importOptions_csv_description_':	"<p>CSV ファイルをテキストエディタで開きます。 下のテキストエリアにファイルの内容をコピーします。</p> <p>区切り記号などを選択します。</p> ",
'Excel_ImportWizard_Title':	"エクセルインポート",
'importOptions_excel_description_':	"<p>エクセルでファイルを開いてインポートしたいセルを選択します。 次に下のテキストエリアに選択したセルをコピーします。</p> ",
'KeePass_ImportWizard_Title':	"KeePass インポート",
'importOptions_keePass_description_':	"<p>KeePas で生成されたファイルをテキストエディタで開きます。 次に下のテキストエリアにファイルの内容をコピーします。</p> ",
'PasswordPlus_ImportWizard_Title':	"Password Plus インポート",
'importOptions_passwordPlus_description':	"<p>Password Plus で生成された CSV ファイルをテキストエディタで開きます。 下のテキストエリアにファイルの内容をコピーします。</p> ",
'RoboForm_ImportWizard_Title':	"RoboForm インポート",
'importOptions_roboForm_description':	"<p>RoboForm で生成された HTML ファイルをテキストエディタで開きます。 次に下のテキストエリアにファイルの内容をコピーします。</p> ",
'importData_parsingDataTitle':	"インポート",
'importData_parsingDataText':	"分析中 ...",
'importData_previewingDataTitle':	"インポート",
'importData_previewingDataText':	"変換中 ...",
'importData_processingDataTitle':	"インポート",
'importData_processingDataText':	"カード作成中 ...",
'ImportWizard':	{
	'EDIT':	"編集",
	'PREVIEW':	"プレビュー",
	'IMPORT':	"インポート",
	'KEEPASS_SETTINGS':	"設定",
	'CSV_EDIT':	"貼り付け",
	'CSV_COLUMNS':	"列",
	'CSV_HEADER':	"ラベル",
	'CSV_TITLE':	"タイトル",
	'CSV_NOTES':	"ノート",
	'CSV_FIELDS':	"タイプ",
	'EXCEL_EDIT':	"編集"
},
'CSV_ImportWizard_Columns':	"<p>インポートする列を選択してください。</p> ",
'CSV_ImportWizard_Header':	"<p>最初の行にラベルが含まれている場合、下のチェックボックスをチェックしてください。</p> ",
'CSV_ImportWizard_Header_Settings_firstRowHeaderLabel':	"先頭行をラベルとして利用する",
'CSV_ImportWizard_Title':	"<p>カードのタイトルになる列を選択してください。 （必須）</p>",
'CSV_ImportWizard_Notes':	"<p>ノートに相当する列を選択してください。 （オプション）</p> ",
'CSV_ImportWizard_Notes_Settings_noSelectionLabel':	"ノートは利用できません",
'CSV_ImportWizard_Fields':	"<p>それぞれの列のデータタイプをドロップダウンリストから選択してください。</p> ",
'CSV_ImportWizard_Fields_MissingLabelWarning':	"ラベルがありません",
'importData_importConfirmation_title':	"インポート",
'importData_importConfirmation_text':	"__numberOfRecords__ 枚のカードをインポートしますか？",
'WELCOME_BACK':	"おかえりなさい",
'currentConnectionText':	"あなたの利用 IP アドレスは __ip__, です。 country__, から __operatingSystem__ 版 __browser__ を利用しています。",
'latestConnectionText':	"前回の利用は __elapsedTimeDescription__ (__time__)、IP アドレスは __ip__, でした。 country__ から __operatingSystem__ 版 __browser__ を利用しました。",
'fullLoginHistoryLinkLabel':	"ログイン履歴を詳しく見る",
'elapsedTimeDescriptions':	{
	'MORE_THAN_A_MONTH_AGO':	"1 か月以上前",
	'MORE_THAN_A_WEEK_AGO':	"1 週間以上前",
	'MORE_THAN_*_WEEKS_AGO':	"elapsed__ 週間以上前",
	'YESTERDAY':	"昨日",
	'*_DAYS_AGO':	"__elapsed__ 日前",
	'ABOUT_AN_HOUR_AGO':	"約 1 時間前",
	'*_HOURS_AGO':	"__elapsed__ 時間前",
	'JUST_A_FEW_MINUTES_AGO':	"直前",
	'ABOUT_*_MINUTES_AGO':	"約 __elapsed__ 分前"
},
'unknown_ip':	"不明",
'countries':	{
	'--':	"不明",
	'AD':	"アンドラ",
	'AE':	"アラブ首長国連邦",
	'AF':	"アフガニスタン",
	'AG':	"アンティグアバーブーダ",
	'AI':	"アングイラ",
	'AL':	"アルバニア",
	'AM':	"アルメニア",
	'AN':	"オランダ アンティル諸島",
	'AO':	"アンゴラ",
	'AP':	"その他のアジアパシフィック地域",
	'AR':	"アルゼンチン",
	'AS':	"米国領サモア",
	'AT':	"オーストリア",
	'AU':	"オーストラリア",
	'AW':	"アルーバ",
	'AX':	"アーラント諸島",
	'AZ':	"アゼルバイジャン",
	'BA':	"ボスニア・ヘルツェゴビナ",
	'BB':	"バルバドス",
	'BD':	"バングラデシュ",
	'BE':	"ベルギー",
	'BF':	"ブルキナファソ",
	'BG':	"ブルガリア",
	'BH':	"バーレーン",
	'BI':	"ブルンジ",
	'BJ':	"ベナン",
	'BN':	"ブルネイダルサラーム",
	'BO':	"ボリビア",
	'BR':	"ブラジル",
	'BS':	"バハマ",
	'BT':	"ブータン",
	'BW':	"ボツワナ",
	'BY':	"ベラルーシ",
	'BZ':	"ベリーズ",
	'CA':	"カナダ",
	'CD':	"コンゴ民主共和国",
	'CF':	"中央アフリカ共和国",
	'CH':	"スイス",
	'CI':	"コートジボワール",
	'CK':	"クック諸島",
	'CL':	"チリ",
	'CM':	"カメルーン",
	'CN':	"中国",
	'CO':	"コロンビア",
	'CR':	"コスタリカ",
	'CS':	"セルビア・モンテネグロ",
	'CU':	"キューバ",
	'CY':	"キプロス",
	'CZ':	"チェコ共和国",
	'DE':	"ドイツ",
	'DJ':	"ジブチ",
	'DK':	"デンマーク",
	'DO':	"ドミニカ共和国",
	'DZ':	"アルジェリア",
	'EC':	"エクアドル",
	'EE':	"エストニア",
	'EG':	"エジプト",
	'ER':	"エリトリア",
	'ES':	"スペイン",
	'ET':	"エチオピア",
	'EU':	"欧州連合",
	'FI':	"フィンランド",
	'FJ':	"フィジー",
	'FM':	"ミクロネシア連邦邦国",
	'FR':	"フランス",
	'GA':	"ガボン",
	'GB':	"英国",
	'GD':	"グラナダ",
	'GE':	"グルジア",
	'GF':	"仏領ギアナ",
	'GG':	"ガーンジー",
	'GH':	"ガーナ",
	'GI':	"ジブラルタル",
	'GL':	"グリーンランド",
	'GP':	"グアドロープ",
	'GR':	"ギリシャ",
	'GT':	"カタロニア",
	'GU':	"グアム",
	'GW':	"ギニアビサウ",
	'GY':	"ガイアナ",
	'HK':	"香港",
	'HN':	"ホンデュラス",
	'HR':	"クロアチア",
	'HT':	"ハイチ",
	'HU':	"ハンガリー",
	'ID':	"インドネシア",
	'IE':	"アイルランド",
	'IL':	"イスラエル",
	'IM':	"マン島",
	'IN':	"インド",
	'IO':	"英領インド洋植民地",
	'IQ':	"イラク",
	'IR':	"イラン・イスラム共和国",
	'IS':	"アイスランド",
	'IT':	"イタリア",
	'JE':	"ジャージー",
	'JO':	"ヨルダン",
	'JP':	"日本",
	'KE':	"ケニア",
	'KG':	"キルギスタン",
	'KH':	"カンボジア",
	'KI':	"キリバス",
	'KN':	"セントキッツネヴィス",
	'KR':	"大韓民国 (韓国)",
	'KW':	"クウェート",
	'KY':	"カイマン諸島",
	'KZ':	"カザフスタン",
	'LA':	"ラオス人民民主共和国",
	'LB':	"レバノン",
	'LC':	"セントルシア",
	'LI':	"リヒテンシュタイン",
	'LK':	"スリランカ",
	'LR':	"リベリア",
	'LS':	"レソト",
	'LT':	"リトアニア",
	'LU':	"ルクセンブルグ",
	'LV':	"ラトビア",
	'LY':	"リビア・アラブ・Jamahiriya",
	'MA':	"モロッコ",
	'MC':	"モナコ",
	'MD':	"モルドバ共和国",
	'MG':	"マダガスカル",
	'MH':	"マーシャル諸島",
	'MK':	"マケドニア共和国",
	'ML':	"マリ",
	'MM':	"ミャンマー",
	'MN':	"モンゴル",
	'MO':	"マカオ",
	'MP':	"北マリアナ諸島",
	'MR':	"モーリタニア",
	'MT':	"マルタ",
	'MU':	"モーリシャス",
	'MV':	"モルジヴ",
	'MW':	"マラウイ",
	'MX':	"メキシコ",
	'MY':	"マレーシア",
	'MZ':	"モザンビーク",
	'NA':	"ナミビア",
	'NC':	"ニューカレドニア",
	'NF':	"ノーフォーク諸島",
	'NG':	"ナイジェリア",
	'NI':	"ニカラグア",
	'NL':	"オランダ",
	'NO':	"ノルウェー",
	'NP':	"ネパール",
	'NR':	"ナウル",
	'NU':	"ニウエ",
	'NZ':	"ニュージーランド",
	'OM':	"オマーン",
	'PA':	"パナマ",
	'PE':	"ペルー",
	'PF':	"仏領ポリネシア",
	'PG':	"パプアニューギニア",
	'PH':	"フィリピン",
	'PK':	"パキスタン",
	'PL':	"ポーランド",
	'PR':	"プエルトリコ",
	'PS':	"パレスチナ占領地区",
	'PT':	"ポルトガル",
	'PW':	"パラオ",
	'PY':	"パラグアイ",
	'QA':	"カタール",
	'RO':	"ルーマニア",
	'RS':	"セルビア",
	'RU':	"ロシア連邦",
	'RW':	"ルワンダ",
	'SA':	"サウジアラビア",
	'SB':	"ソロモン諸島",
	'SC':	"セイシェル",
	'SD':	"スーダン",
	'SE':	"スウェーデン",
	'SG':	"シンガポール",
	'SI':	"スロベニア",
	'SK':	"スロバキア",
	'SL':	"シエラレオネ",
	'SM':	"サンマリノ",
	'SN':	"セネガル",
	'SR':	"スリナム",
	'SV':	"エルサルバドル",
	'SY':	"シリアアラブ共和国",
	'SZ':	"スワジランド",
	'TC':	"タークスアンドケーコス諸島",
	'TG':	"トーゴ",
	'TH':	"タイ",
	'TJ':	"タジキスタン",
	'TM':	"トルクメニスタン",
	'TN':	"チュニジア",
	'TO':	"トンガ",
	'TR':	"トルコ",
	'TT':	"トリニダードトバコ",
	'TV':	"ツヴァル",
	'TW':	"中国領・台湾",
	'TZ':	"タニザニア連合共和国",
	'UA':	"ウクライナ",
	'UG':	"ウガンダ",
	'US':	"アメリカ合衆国",
	'UY':	"ウルグアイ",
	'UZ':	"ウズベキスタン",
	'VA':	"聖庁 (バチカン市国)",
	'VE':	"ベネズェラ",
	'VG':	"英国ヴァージン諸島",
	'VI':	"米国ヴァージン諸島",
	'VN':	"ベトナム",
	'VU':	"バヌアツ",
	'WF':	"ワリーエフトゥーナ諸島",
	'WS':	"サモア",
	'YE':	"イエメン",
	'ZA':	"南アフリカ",
	'ZM':	"ザンビア",
	'ZW':	"ジンバブエ",
	'ZZ':	"Reserved"
},
'browsers':	{
	'UNKNOWN':	"不明",
	'MSIE':	"インターネットエクスプローラー",
	'FIREFOX':	"Firefox",
	'OPERA':	"Opera",
	'SAFARI':	"Safari",
	'OMNIWEB':	"OmniWeb",
	'CAMINO':	"Camino"
},
'operatingSystems':	{
	'UNKNOWN':	"不明",
	'WINDOWS':	"ウィンドウズ",
	'MAC':	"Mac",
	'LINUX':	"Linux",
	'IPHONE':	"iPhone",
	'MOBILE':	"携帯電話",
	'OPENBSD':	"OpenBSD",
	'FREEBSD':	"FreeBSD",
	'NETBSD':	"NetBSD"
},
'calendarStrings':	{
	'months':	{
		'0':	"1 月",
		'1':	"2 月",
		'2':	"3 月",
		'3':	"4 月",
		'4':	"5",
		'5':	"6 月",
		'6':	"7 月",
		'7':	"8 月",
		'8':	"9 月",
		'9':	"10 月",
		'10':	"11 月",
		'11':	"12 月"
	},
	'shortMonths':	{
		'0':	"1",
		'1':	"2",
		'2':	"3",
		'3':	"4",
		'4':	"5",
		'5':	"6",
		'6':	"7",
		'7':	"8",
		'8':	"9",
		'9':	"10",
		'10':	"11",
		'11':	"12"
	},
	'days':	{
		'0':	"日曜日",
		'1':	"月曜日",
		'2':	"火曜日",
		'3':	"水曜日",
		'4':	"木曜日",
		'5':	"金曜日",
		'6':	"土曜日"
	},
	'shortDays':	{
		'0':	"日",
		'1':	"月",
		'2':	"火",
		'3':	"水",
		'4':	"木",
		'5':	"金",
		'6':	"土"
	},
	'veryShortDays':	{
		'0':	"月",
		'1':	"月",
		'2':	"日",
		'3':	"金",
		'4':	"木",
		'5':	"金",
		'6':	"水"
	},
	'amDesignation':	"土",
	'pmDesignation':	"午後"
},
'fullDate_format':	"l, F d, Y H:i:s",

__syntaxFix__: "syntax fix"
});
