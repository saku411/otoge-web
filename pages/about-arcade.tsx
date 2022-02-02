import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const AboutArcade = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h1 id='アーケード音ゲー部門'>アーケード音ゲー部門</h1>
        <h2 id='大会概要'>大会概要</h2>
        <p>”音ゲー七帝戦”は、旧帝大の学生・OBを対象とした音ゲー大会です。</p>
        <p>下記のいずれかを満たすことを参加資格とします。</p>
        <ol>
          <li>各旧帝大音ゲーサークルに所属している学生</li>
          <li>旧帝大在籍の学生</li>
          <li>各旧帝大音ゲーサークルOB</li>
        </ol>
        <p>
          ただし、2と3については
          <strong>
            LINEやTwitter、discord等何かしらの手段で各音ゲーサークルに連絡を取れること
          </strong>
          を追加の条件とします。
        </p>
        <h2 id='対象機種'>対象機種</h2>
        <ul>
          <li>beatmania IIDX(SP/DP)</li>
          <li>SOUND VOLTEX</li>
          <li>pop'n music</li>
          <li>Dance Dance Revolution(SP/DP)</li>
          <li>GuitarFreaks</li>
          <li>DrumMania</li>
          <li>jubeat</li>
          <li>ノスタルジア</li>
          <li>DANCERUSH</li>
          <li>初音ミク -project DIVA-</li>
          <li>maimai</li>
          <li>CHUNITHM</li>
          <li>オンゲキ</li>
          <li>太鼓の達人</li>
          <li>GROOVE COASTER</li>
          <li>WACCA</li>
        </ul>
        <h2 id='ルール'>ルール</h2>
        <ul>
          <li>期間中(3/1～3/31)にプレーし、専用のフォームから提出されたスコアが対象です。</li>
          <li>一部の機種には部門が2つ用意され、各部門ごとに1曲ずつ課題曲が設定されます。</li>
          <li>全ての部門において難易度選択制です。各部門に1つの難易度にのみ提出できます。</li>
          <li>
            また、機種ごとに提出制限が設定され、これを満たさないスコアの提出は無効となります。ただし、各部門で最も低い難易度で提出する場合は、制限を満たさないスコアでも提出が可能です。(例:pop'n
            musicの場合、部門1ではNORMAL、部門2ではEASYで提出する場合、クリアできていなくても提出できますが、部門1のHYPER、部門2のNORMAL、HYPER、EXはクリアしていないと提出できません。)
          </li>
          <li>
            1人あたり何部門でも参加することが可能です。また、各機種において片方の部門のみ参加することも可能です。
          </li>
          <li>
            GuitarFreaks、DrumManiaの2機種では難易度に関係なく、部門ごとに単曲スキル値の大小のみで順位を付けます。その他の機種では各部門毎に順位を(提出した難易度よりも上の難易度全ての提出者人数の合計)
            + (提出難易度内の順位)で定めます。
          </li>
          <li>
            各部門毎に1位、30位、150位にそれぞれ1500pt、1350pt、150ptの順位点を与え、これらで区切られる区間の点数配分が線形になるよう順位点を定めます。150位以下は一律で150ptになります。
          </li>
          <li>
            各部門毎の順位の他に、順位点を用いて算出する各参加者ごとの順位点
            <strong>上位5部門の合計pt</strong>
            (以下、個人スコアと呼びます)と全部門の合計ptのランキングも集計します。
            サークルの総合ptの集計には個人スコアを使用し、サークルごとの参加者の個人スコアの平均値がサークルの合計ptとなります。
          </li>
        </ul>
        <h3 id='機種別の注意'>機種別の注意</h3>
        <h4 id='beatmania-iidx'>beatmania IIDX</h4>
        <ul>
          <li>EXスコアで集計を行います。シングルプレー、ダブルプレー個別に集計します。</li>
          <li>
            EXPAND
            JUDGEやH-RANなどのスコアの記録されないオプションの使用を禁止します。それ以外のオプションの使用は自由です。​
          </li>
          <li>提出制限: クリア(ASSIST EASY以上)</li>
        </ul>
        <h4 id='sound-voltex'>SOUND VOLTEX</h4>
        <ul>
          <li>通常スコアで集計を行います。</li>
          <li>オプションの使用は自由です。</li>
          <li>新筐体(Valkyrie model)でのスコアは有効です。</li>
          <li>提出制限:クリア</li>
        </ul>
        <h4 id='popn-music'>pop'n music</h4>
        <ul>
          <li>
            通常スコアでの集計を行います。
            <br />- オプションの使用は自由です。
          </li>
          <li>提出制限:クリア(EASY以上)</li>
        </ul>
        <h4 id='dance-dance-revolution'>Dance Dance Revolution</h4>
        <ul>
          <li>通常スコアで集計を行います。シングルプレー、ダブルプレー個別に集計します。</li>
          <li>
            「タイミング別カット」、「フリーズアロー」、「同時踏み」オプションの使用を禁止します。それ以外のオプションの使用は自由です。
          </li>
          <li>提出制限:クリア</li>
        </ul>
        <h4 id='guitarfreaks'>GuitarFreaks</h4>
        <ul>
          <li>
            単曲スキル値での集計を行います。難易度に関係なく、単曲スキル値の大小のみによって順位を付けます。
          </li>
          <li>難易度及びギター、ベースの選択は自由です。</li>
          <li>
            達成率が下がるオプションの使用を禁止します。それ以外のオプションの使用は自由です。
          </li>
          <li>提出制限:なし</li>
        </ul>
        <h4 id='drummania'>DrumMania</h4>
        <ul>
          <li>
            単曲スキル値での集計を行います。難易度に関係なく、単曲スキル値の大小のみによって順位を付けます。
          </li>
          <li>難易度選択は自由です。</li>
          <li>オプションの使用は自由です。</li>
          <li>提出制限:なし</li>
        </ul>
        <h4 id='jubeat'>jubeat</h4>
        <ul>
          <li>
            通常スコアでの集計を行います。
            <br />- オプションの使用は自由です。
          </li>
          <li>提出制限:Rating A以上(850,000点以上)</li>
        </ul>
        <h4 id='ノスタルジア'>ノスタルジア</h4>
        <ul>
          <li>通常スコアでの集計を行います。</li>
          <li>「両手で演奏」を選んでください。右手のみ、左手のみのプレーは集計対象としません。</li>
          <li>それ以外のオプションの使用は自由です。</li>
          <li>提出制限:RANK A以上(850,000点以上)</li>
        </ul>
        <h4 id='dancerush-stardom'>DANCERUSH STARDOM</h4>
        <ul>
          <li>通常スコアでの集計を行います。1人プレーでのスコアを対象とします。</li>
          <li>オプションの使用は自由です。</li>
          <li>提出制限: RANK ★★★★★</li>
        </ul>
        <h4 id='初音ミク--project-diva-'>初音ミク -Project DIVA-</h4>
        <ul>
          <li>達成率での集計を行います。</li>
          <li>完奏モードでのプレーは対象としません。</li>
          <li>オプションの使用は禁止です。</li>
          <li>提出制限: クリア</li>
        </ul>
        <h4 id='maimai'>maimai</h4>
        <ul>
          <li>達成率での集計を行います。</li>
          <li>オプションの使用は自由です。</li>
          <li>提出制限:RANK AAA以上(達成率 94.0000％以上)</li>
        </ul>
        <h4 id='チュウニズム'>チュウニズム</h4>
        <ul>
          <li>通常スコアでの集計を行います。</li>
          <li>オプションの使用は自由です。</li>
          <li>提出制限:RANK S以上(975,000点以上)</li>
        </ul>
        <h4 id='オンゲキ'>オンゲキ</h4>
        <ul>
          <li>テクニカルスコアでの集計を行います。</li>
          <li>オプションの使用は自由です。</li>
          <li>提出制限: RANK S以上(970,000点以上)</li>
        </ul>
        <h4 id='太鼓の達人'>太鼓の達人</h4>
        <ul>
          <li>通常スコアでの集計を行います。</li>
          <li>オプションの使用は自由です。</li>
          <li>提出制限:クリア</li>
        </ul>
        <h4 id='groove-coaster'>GROOVE COASTER</h4>
        <ul>
          <li>通常スコアでの集計を行います。</li>
          <li>
            SAFE,SUPER SAFE,EASY TARGET,ONE
            HANDの使用を禁止します。それ以外のアイテムの使用は自由です。
          </li>
          <li>提出制限: クリア</li>
        </ul>
        <h4 id='wacca'>WACCA</h4>
        <ul>
          <li>通常スコアでの集計を行います。</li>
          <li>オプションの使用は自由です。</li>
          <li>提出制限:RANK S以上(900,000点以上)</li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default AboutArcade
