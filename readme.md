HTML Linguistics Core
=====================



This project will contain infrastructure for the core data model for HTLX. As such,
it is expected that every interface which deals with an HTLX-style representation of
data will include this core.

     {} Corpus
        {} Metadata 
        [] Text 
           {} Metadata 
           [] Transcript 
              {} Metadata 
              {} Utterance
                 “”  lang		“es”
                 ””  transcription     	“¿Hablas español?”
                 {} translations
                    “en”              	“Do you speak Spanish?”    
                    “fr”              	“Est-ce que tu parles espagnol?”    
                 [] analysis          
                    {} word
                       “” morphology    “ˈaβl-as” 
                       “” gloss        	“to.speak-2.SG.PRES.IND”
                    {} word
                       “” morphology    “espaˈɲol”
                       “” gloss         “Spanish”


This data representation is implemented (here) with Backbone.js `Collections`
(corresponding to `Arrays` above) and `Models` (corresponding to objects).

* [] represents an array
* {} an object
* -“” a Unicode string

HTLX is conceived of as a series of interfaces and data management practices which enable:

1. Conversion and restructuring of existing linguistic information of any sort to the above structure.
2. Efficient input to HTLX by the linguist in a fieldwork setting.
3. Querying and repurposing of the resulting corpora in a linguistically interesting way.

The goal of HTLX is not to dictate every detail of the linguist’s workflow;
rather, it is to help the linguist and other language workers take advantage of
a series of loosely-connected interfaces which encourage automation where it is
useful: the evasion of drudgery of all kinds, be it _harmful_ or _harmless_.


