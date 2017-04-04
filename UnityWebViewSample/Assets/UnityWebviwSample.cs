using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UnityWebviwSample : MonoBehaviour 
{
	// 接続先のUrl
	private string URL = "https://www.green-japan.com/company/1774";

	// WebViewオブジェクト
	private WebViewObject _webViewObject;


	// Use this for initialization
	void Start ()
	{
		this._webViewObject = new GameObject ("WebViewObject").AddComponent<WebViewObject> (); // インスタンス生成
		this._webViewObject.Init (x => Debug.Log(x));										   // 初期化
		this._webViewObject.LoadURL(URL);												   // 接続先のURL
		this._webViewObject.SetMargins(50,100,50,50);										   // 表示サイズ（全て０指定だとフルスクリーンになる）
		this._webViewObject.SetVisibility (true);											   // 可視化するか否か
		Debug.Log(URL);
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
